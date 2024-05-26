let percentage = 20;
const maxPercentage = 100;

function updateBannerText(percentage) {
  document.getElementById("dangerBanner").textContent = `DANGER: High Carbon Emissions! Carbon emissions have increased by ${percentage}%!`;
}

function increasePercentage() {
  if (percentage < maxPercentage) {
    percentage += 10;
    updateBannerText(percentage);
  }
}

window.onload = increasePercentage;


