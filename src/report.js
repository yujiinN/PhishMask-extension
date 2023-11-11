document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.querySelector(".btSubmit");
  var reportTextarea = document.getElementById("report");
  var reportMessageContainer = document.getElementById("reportMessageContainer");

  submitButton.addEventListener("click", function () {
    var phishingURL = reportTextarea.value;

    if (phishingURL.trim() !== "") {
      alert("Phishing link reported successfully!");

      setTimeout(function () {
        reportMessageContainer.textContent = "";
        goBack(); // Call the goBack function to navigate back to home.html
      }, 1000);

      reportTextarea.value = "";
    } else {
      var errorMessage = "Please enter a phishing URL.";
      reportMessageContainer.textContent = errorMessage;
    }
  });
});

// Function to go back to home.html
function goBack() {
  window.location.href = "home.html";
}

// Function to open logs
function openLogs() {
  // Replace this with the actual functionality to open logs
  alert("Opening Logs");
}

// Function to open feedback
function openFeedback() {
  window.location.href = "feedback.html"; // Navigate to feedback.html
}