function updateTime() {
    now = new Date();
    let hours = now.getHours();
    const standard = hours > 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const time = `${hours}:${minutes}:${seconds} ${standard}`
    document.getElementById("clock").textContent = time;
}

updateTime()
setInterval(updateTime, 1000)