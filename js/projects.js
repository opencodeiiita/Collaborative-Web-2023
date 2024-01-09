var projectShowAll = false;

const projectShowAllButton = document.getElementById("projects-show-more");
document.addEventListener("DOMContentLoaded", populateProjects);

projectShowAllButton.addEventListener("click", () => {
  projectShowAll = true;
  projectShowAllButton.classList.add("no-display");
  populateProjects();
});

function populateProjects() {
  // Check if the screen width is more than 900px
  if (window.innerWidth > 900) {
    projectShowAll = true;
    projectShowAllButton.classList.add("no-display");
  }

  fetch("data/project.json")
    .then((response) => response.json())
    .then((data) => generateProjectCards(data))
    .catch((error) => console.error("Error fetching project data:", error));
}

function createProjectElement(project) {
  const projectElement = document.createElement("div");
  projectElement.classList.add("card");

  projectElement.innerHTML = `
          <img src="${project.image}" class="image" alt="${project.name}">
          <div class="project-name">
              <h3>${project.name}</h3>
          </div>
          <div>
              <h4 class="about-project">${project.description}</h4>
          </div>
          <div class="github_project">
              <a href="${project["repo-url"]}" target="_blank"><i class="fab fa-github"></i></a>
          </div>
      `;

  return projectElement;
}

function generateProjectCards(projectData) {
  const projectsSection = document.getElementById("project-wrapper");
  projectsSection.innerHTML = "";

  const numLength = projectData.length;
  const numProjects = projectShowAll ? numLength : 6;

  for (let i = 0; i < numProjects; i++) {
    const card = createProjectElement(projectData[i]);
    projectsSection.appendChild(card);
  }
}
