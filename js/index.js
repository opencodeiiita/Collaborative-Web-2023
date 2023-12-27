let moveToTop = document.getElementById("moveToTop");
let body = document.getElementById("body");
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    moveToTop.style.bottom = "10px";
  } else {
    moveToTop.style.bottom = "-100px";
  }
});
moveToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

fetch("data/mentors.json")
  .then((response) => response.json())
  .then((data) => generateMentorCards(data))
  .catch((error) => console.error("Error fetching mentor data:", error));

function generateMentorCards(mentorsData) {
  const mentorSection = document.getElementById("container");

  mentorsData.forEach((mentor) => {
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
  });
}

fetch("https://events-api.geekhaven.in/api/v1/events//Opencode'23/leaderboard")
  .then((response) => response.json())
  .then((data) => generateLeaderboardRows(data.data))
  .catch((error) => console.error("Error fetching mentor data:", error));

function generateLeaderboardRows(leaderboardData) {
  const leaderSection = document.getElementById("leadercontainer");

  console.log(leaderboardData[0]);

  const columnNameRow = document.createElement("div");
  columnNameRow.classList.add("participant");

  columnNameRow.innerHTML = `
    <h3 class="partic">Sr No.</h3>
    <h3 class="partic">Profile</h3>
    <h3 class="partic">Name</h3>
    <h3 class="partic">Pr Merged</h3>
    <h3 class="partic">Total points</h3>
  `;

  leaderSection.appendChild(columnNameRow);

  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.classList.add("participant");
    card.innerHTML = `
      <h3 class="particdetails">${i + 1}.</h3>
      <div class="particdetails">
      <img
          src="${leaderboardData[i].avatarUrl}"
          class="partici_icon"
      />
      </div>
      <h3 class="particdetails">${leaderboardData[i].name}</h3>
      <h3 class="particdetails">${leaderboardData[i].prmerged}</h3>
      <div class="particdetails points">
      <h3 class="totalpoints">${leaderboardData[i].points}</h3>
      <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="pointsicon"
      >
          <path
          d="M8 14C9.66667 14 11.075 13.4167 12.225 12.25C13.375 11.0833 13.9667 9.66667 14 8V2H8C6.33333 2.03333 4.91667 2.625 3.75 3.775C2.58333 4.925 2 6.33333 2 8C2 9.66667 2.58333 11.0833 3.75 12.25C4.91667 13.4167 6.33333 14 8 14ZM6.825 12.325L11.425 8.225C11.575 8.09167 11.6167 7.93333 11.55 7.75C11.4833 7.56667 11.35 7.45833 11.15 7.425L7.55 7.075L9.7 4.1C9.75 4.01667 9.77933 3.93733 9.788 3.862C9.79667 3.78667 9.76733 3.716 9.7 3.65C9.63333 3.56667 9.55 3.52933 9.45 3.538C9.35 3.54667 9.25833 3.584 9.175 3.65L4.6 7.75C4.45 7.88333 4.40833 8.04167 4.475 8.225C4.54167 8.40833 4.675 8.51667 4.875 8.55L8.475 8.9L6.3 11.875C6.25 11.9583 6.225 12.0373 6.225 12.112C6.225 12.1867 6.25833 12.2577 6.325 12.325C6.39167 12.3917 6.471 12.425 6.563 12.425C6.655 12.425 6.74233 12.3917 6.825 12.325ZM8 16C7.06667 16 6.18767 15.854 5.363 15.562C4.53833 15.27 3.784 14.8577 3.1 14.325L1.725 15.7C1.625 15.8 1.51267 15.875 1.388 15.925C1.26333 15.975 1.134 16 1 16C0.716667 16 0.479333 15.904 0.288 15.712C0.0966668 15.52 0.000666667 15.2827 0 15C0 14.8667 0.0249998 14.7377 0.0749998 14.613C0.125 14.4883 0.2 14.3757 0.3 14.275L1.675 12.9C1.14167 12.2167 0.729334 11.4627 0.438 10.638C0.146667 9.81333 0.000666667 8.934 0 8C0 5.76667 0.775 3.875 2.325 2.325C3.875 0.775 5.76667 0 8 0H16V8C16 10.2333 15.225 12.125 13.675 13.675C12.125 15.225 10.2333 16 8 16Z"
          fill="white"
          />
      </svg>
      </div>
    `;

    leaderSection.appendChild(card);
  }
}
