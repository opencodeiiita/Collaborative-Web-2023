document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.getElementById('wrapper');

    fetch('data/project.json')
        .then(response => response.json())
        .then(data => {

            data.forEach(project => {
                const projectElement = createProjectElement(project);
                projectsSection.appendChild(projectElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


    function createProjectElement(project) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('card');

        projectElement.innerHTML = `
            <img src="${project.image}" class="image" alt="${project.name}">
            <div class="project-name">
                <h3>${project.name}</h3>
            </div>
            <div>
                <h4 class="about-project">${project.description}</h4>
            </div>
            <div class="github_project">
                <a href="${project['repo-url']}" target="_blank"><i class="fab fa-github"></i></a>
            </div>
        `;

        return projectElement;
    }
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach((card, index) => {
        // Set a staggered delay, e.g., 0s, 0.2s, 0.4s, etc.
        const delay = index * 1; // Adjust this value to control the delay interval
        card.style.animationDelay = `${delay}s`;
    });
});