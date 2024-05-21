//Time update
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    Array.from(document.getElementsByClassName('current-time')).forEach(ct => {
        ct.textContent = timeString;
    });   
}
// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

