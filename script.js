let greet = new Date().getHours();

if (greet <= 11) {
    document.getElementById('greet').innerText = 'Good Morning'
} else if (greet <= 15) {
    document.getElementById('greet').innerText = 'Good Afternoon'
} else if (greet <= 19) {
    document.getElementById('greet').innerText = 'Good Evening'
} else {
    document.getElementById('greet').innerText = 'Good Night'
}