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

        // Display only a portion of the project description initially
        const shortDescription = project.description.substring(0, 100);
        
        projectElement.innerHTML = `
            <img src="${project.image}" class="image" alt="${project.name}">
            <div class="project-name">
                <h3>${project.name}</h3>
            </div>
            <div>
                <h4 class="about-project">${shortDescription}</h4>
            </div>
            <div class="github_project">
                <a href="${project['repo-url']}" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            
            <!-- Add a "Show More" button -->
            <button class="show-more-btn" onclick="showMore('${project.description}')">Show More</button>
        `;

        return projectElement;
    }

    function showMore(fullDescription) {
        const aboutProjectElement = document.querySelector('.about-project');
        aboutProjectElement.textContent = fullDescription;

        const showMoreButton = document.querySelector('.show-more-btn');
        showMoreButton.style.display = 'none';
    }
});
