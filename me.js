// This script is for demonstration purposes. It changes the text color on click.
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    container.addEventListener('click', function() {
        const colors = ['#ff6347', '#4682b4', '#32cd32', '#ff4500'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        container.style.color = randomColor;
    });
});