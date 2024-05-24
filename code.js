let percentage = 20;

function increasePercentage() {
  if (percentage < 100) {
    percentage +=10;
    document.getElementById("dangerBanner").innerHTML = `DANGER: High Carbon Emissions! Carbon emissions have increased by ${percentage}%!`;
  }
}

// Call the increasePercentage function on each reload
window.onload = increasePercentage;