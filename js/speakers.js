var speakerShowAll = false;

const speakerShowAllButton = document.getElementById("speakers-show-more");
document.addEventListener("DOMContentLoaded", populateSpeakers);

speakerShowAllButton.addEventListener("click", () => {
  speakerShowAll = true;
  speakerShowAllButton.classList.add("no-display");
  populateSpeakers();
});

function populateSpeakers() {
  // Check if the screen width is more than 900px
  if (window.innerWidth > 900) {
    speakerShowAll = true;
    speakerShowAllButton.classList.add("no-display");
  }

  fetch("data/speakers.json")
    .then((response) => response.json())
    .then((data) => generateSpeakerCards(data))
    .catch((error) => console.error("Error fetching speaker data:", error));
}

function generateSpeakerCards(speakersData) {
  const speakerSection = document.getElementById("speakers-container");
  speakerSection.innerHTML = "";

  const numLength = speakersData.length;
  const numSpeakers = speakerShowAll ? numLength : 6;

  for (let i = 0; i < numSpeakers; i++) {
    const speaker = speakersData[i];

    const card = document.createElement("div");
    card.classList.add("speaker-card");
    card.innerHTML = `
    <img src="${speaker.xavatar}" class="image">

    <div class="speaker-name">
        <h3>${speaker.Name}</h3>
    </div>
    
    <h3 class="wing-speaker">${speaker.Role} </h4> 
    <h4 class="role-speaker">${speaker.At}</h4> 
    <div class="socials">
        <a href="${speaker.x}" target="_blank"><i class="fab fa-twitter"></i></a>
        ${speaker.linkedin ? `<a href="${speaker.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
        </div>
    <div class="github">
        
    </div>
  `;
    speakerSection.appendChild(card);
  }
}
