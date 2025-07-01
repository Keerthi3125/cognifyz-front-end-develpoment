// JavaScript to change background color randomly
document.getElementById("colorButton").addEventListener("click", function () {
    const colors = ["#f9f9f9", "#d1e7dd", "#f8d7da", "#cff4fc", "#fff3cd", "#e2e3e5"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
