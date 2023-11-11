
document.addEventListener("DOMContentLoaded", function () {
    var statusText = document.getElementById("statusText");
    var onOffText = document.getElementById("onOffText");
    var toggleSwitch = document.getElementById("toggleSwitch");
  
    toggleSwitch.addEventListener("change", function () {
      if (toggleSwitch.checked) {
        statusText.innerText = "(Status: On)";
      } else {
        statusText.innerText = "(Status: Off)";
      }
    });
  });
  