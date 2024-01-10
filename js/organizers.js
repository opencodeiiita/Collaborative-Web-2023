let showAll = false;

const showAllButton = document.getElementById("organizers-show-more");
showAllButton.addEventListener("click", () => {
  showAll = true;
  showAllButton.classList.add("no-display");
  populateOrganizers();
});

document.addEventListener("DOMContentLoaded", populateOrganizers);

function populateOrganizers() {
  // Check if the screen width is more than 900px
  if (window.innerWidth > 900) {
    showAll = true;
    showAllButton.classList.add("no-display");
  }

  fetch("data/organisers.json")
    .then((response) => response.json())
    .then((organizers) => {
      const container = document.getElementById("organizers-container");
      container.innerHTML = "";

      const numLength = organizers.length;
      const numOrganizers = showAll ? numLength : 6;

      for (let i = 0; i < numOrganizers; i++) {
        const organizer = organizers[i];

        const card = document.createElement("div");
        card.className = "organizer-card";

        card.innerHTML = `
            <img src="${organizer.gitavatar}" class="organizer-gitavatar" alt="${organizer.Name}'s Avatar" >
            <h2 class="organizername">${organizer.Name}</h2>
            <p class="organizer-discord">${organizer.Discord}</p>
            <p class="wing-organizer">${organizer.Wing}</p>
            <p class="role-organizer">${organizer.Role}</p>
            <div class="github">
                <a href="${organizer.github}" target="_blank"><i class="fab fa-github"></i></a>
            </div>
          `;

        container.appendChild(card);
      }

      if (!showAll && numLength > 6) {
        const showMoreButton = document.createElement("button");
        showMoreButton.textContent = "Show More";
        showMoreButton.addEventListener("click", () => {
          showAll = true;
          showMoreButton.style.display = "none";
          populateOrganizers();
        });

        container.appendChild(showMoreButton);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}
