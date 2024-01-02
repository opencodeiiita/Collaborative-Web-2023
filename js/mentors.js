var mentorShowAll = false;

const mentorShowAllButton = document.getElementById("mentors-show-more");
document.addEventListener("DOMContentLoaded", populateMentors);

mentorShowAllButton.addEventListener("click", () => {
  mentorShowAll = true;
  mentorShowAllButton.classList.add("no-display");
  populateMentors();
});

function populateMentors() {
  // Check if the screen width is more than 900px
  if (window.innerWidth > 900) {
    mentorShowAll = true;
    mentorShowAllButton.classList.add("no-display");
  }

  fetch("data/mentors.json")
    .then((response) => response.json())
    .then((data) => generateMentorCards(data))
    .catch((error) => console.error("Error fetching mentor data:", error));
}

function generateMentorCards(mentorsData) {
  const mentorSection = document.getElementById("container");
  mentorSection.innerHTML = "";

  const numLength = mentorsData.length;
  const numMentors = mentorShowAll ? numLength : 6;

  for (let i = 0; i < numMentors; i++) {
    const mentor = mentorsData[i];

    const card = document.createElement("div");
    card.classList.add("mentorcard");
    card.innerHTML = `
    <img src="${mentor.gitavatar}" class="image">

    <div class="mentor-name">
        <h3>${mentor.Name}</h3>
    </div>
    
    <h6 class="mentor-discord">${mentor.Discord}</h6>
    <h3 class="wing-mentor">${mentor.Wing} </h4> 
    <h4 class="role-mentor">${mentor.Role}</h4> 
    <div class="github">
        <a href="${mentor.github}" target="_blank"><i class="fab fa-github"></i></a>
    </div>
  `;
    mentorSection.appendChild(card);
  }
}
