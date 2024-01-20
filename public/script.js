// Add this JavaScript code to your existing script.js file

function addColor() {
    var colorSelector = document.getElementById("colorSelector");
    var selectedColor = colorSelector.value;

    var colorfulCircles = document.getElementById("colorfulCircles");

    // Create a new circle element
    var newCircle = document.createElement("div");
    newCircle.classList.add("circle");
    newCircle.style.backgroundColor = selectedColor;

    // Append the new circle to the container
    colorfulCircles.appendChild(newCircle);
}
