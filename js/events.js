document.addEventListener('DOMContentLoaded', () => {
    const eventsSection = document.getElementById('events-wrapper');

    fetch('data/events.json')
        .then(response => response.json())
        .then(data => {

            data.forEach(event => {
                const eventElement = createEventElement(event);
                eventsSection.appendChild(eventElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


    function createEventElement(event) {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event-card');

        eventElement.innerHTML = `
            <div class="event-name">
                <h3>${event.name}</h3>
            </div>
            <div>
                <h4 class="about-event">${event.description}</h4>
            </div>
            <div class="event-time">
                <h4>${event.time}</h4>
            </div>
            <h5 class="platform-text">PLATFORM:</h5>
            <div class="center space">
                <div class="event-image-wrapper">
                    <img src="${event.platform}" class="event-image" alt="${event.name}">
                </div>
            </div>
            
            <h5 class="platform-text">PROBLEM SETTERS:</h5>
            <div class="setter-div">
                ${event.problem_setters.map(setter => `<h4>${setter}</h4>`).join('')}
            </div>
            <div class="center">
                <div class="github-event">
                    <a href="${event['repo-url']}" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
            
        `;

        return eventElement;
    }

    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach((card, index) => {
        // Set a staggered delay, e.g., 0s, 0.2s, 0.4s, etc.
        const delay = index * 1; // Adjust this value to control the delay interval
        card.style.animationDelay = `${delay}s`;
    });
});