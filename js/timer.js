const OCenddate = new Date("January 13,2024 23:59:59").getTime();

const updateTimer=()=>{
    const todaydate = new Date().getTime();
    const timeleft=OCenddate-todaydate;

const days=Math.floor(timeleft/(1000*60*60*24));
const hours=Math.floor((timeleft%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((timeleft%(1000*60*60))/(1000*60));
const seconds=Math.floor((timeleft%(1000*60))/1000);

document.querySelector('.timer-section:nth-child(1) .timer-box:nth-child(1)').innerHTML=Math.floor(days/10);
document.querySelector('.timer-section:nth-child(1) .timer-box:nth-child(2)').innerHTML=Math.floor(days%10);
document.querySelector('.timer-section:nth-child(2) .timer-box:nth-child(1)').innerHTML=Math.floor(hours/10);
document.querySelector('.timer-section:nth-child(2) .timer-box:nth-child(2)').innerHTML=Math.floor(hours%10);
document.querySelector('.timer-section:nth-child(3) .timer-box:nth-child(1)').innerHTML=Math.floor(minutes/10);
document.querySelector('.timer-section:nth-child(3) .timer-box:nth-child(2)').innerHTML=Math.floor(minutes%10);
document.querySelector('.timer-section:nth-child(4) .timer-box:nth-child(1)').innerHTML=Math.floor(seconds/10);
document.querySelector('.timer-section:nth-child(4) .timer-box:nth-child(2)').innerHTML=Math.floor(seconds%10);

if(timeleft<0)
{
    document.getElementById("timer").innerHTML="Event has ended";
}
};
updateTimer();
setInterval(updateTimer,1000);