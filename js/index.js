let moveToTop=document.getElementById("moveToTop");
let body=document.getElementById("body");
window.addEventListener("scroll",function(){
    if(window.scrollY>1){
        moveToTop.style.bottom="10px";
    }
    else{
        moveToTop.style.bottom="-100px";
    }
});
moveToTop.addEventListener("click",function(){
    window.scrollTo({top:0,behavior:"smooth"});
})

fetch('data/mentors.json')
.then(response => response.json())
.then(data => generateMentorCards(data))
.catch(error => console.error('Error fetching mentor data:', error));

function generateMentorCards(mentorsData) {
const mentorSection = document.getElementById('container');

mentorsData.forEach((mentor) => {
  const card = document.createElement('div');
  card.classList.add('mentorcard');
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
