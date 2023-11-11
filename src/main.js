document.addEventListener("DOMContentLoaded", function () {
  var statusText = document.getElementById("statusText");
  var onOffText = document.getElementById("onOffText");
  var toggleSwitch = document.getElementById("toggleSwitch");

  // Check if there's a stored state in localStorage
  var storedState = localStorage.getItem("toggleState");

  // Set the initial state based on the stored value
  if (storedState === "on") {
    toggleSwitch.checked = true;
    statusText.innerText = "(Status: On)";
  } else {
    toggleSwitch.checked = false;
    statusText.innerText = "(Status: Off)";
  }

  toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
      statusText.innerText = "(Status: On)";
      // Store the state in localStorage when the switch is turned on
      localStorage.setItem("toggleState", "on");
    } else {
      statusText.innerText = "(Status: Off)";
      // Store the state in localStorage when the switch is turned off
      localStorage.setItem("toggleState", "off");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the button element by its ID
  var reportButton = document.getElementById("reportButton");

  // Add a click event listener to the button
  reportButton.addEventListener("click", function () {
    // Redirect to the report.html page or perform any other desired action
    window.location.href = "report.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the button element by its ID
  var feedbackButton = document.getElementById("feedbackButton");

  // Add a click event listener to the button
  feedbackButton.addEventListener("click", function () {
    // Redirect to the feedback.html page or perform any other desired action
    window.location.href = "feedback.html";
  });
});

