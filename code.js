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


easy_add_styles = function(task, iframe = null){
  if (iframe.body) {
    var contents = $(iframe.body).contents()
    for (var k in task.search) {
      console.log(contents.find(task.search[k]));
      contents.find(task.search[k]).css(task.css[k]);
    }
  }
}
