document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.querySelector(".btSubmit");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var feedbackTextarea = document.getElementById("feedback");
  var feedbackMessageContainer = document.getElementById("feedbackMessageContainer");

  submitButton.addEventListener("click", function () {
    var name = nameInput.value;
    var email = emailInput.value;
    var feedback = feedbackTextarea.value;

    if (name.trim() !== "" && email.trim() !== "" && feedback.trim() !== "") {
      alert("Feedback submitted successfully!");

      setTimeout(function () {
        feedbackMessageContainer.textContent = "";
        window.location.href = "home.html";
      }, 1000);

      nameInput.value = "";
      emailInput.value = "";
      feedbackTextarea.value = "";
    } else {
      var errorMessage = "Please fill in all fields.";
      feedbackMessageContainer.textContent = errorMessage;
    }
  });
});

// Function to go back to home.html
function goBack() {
  window.location.href = "home.html";
}

// Function to open logs (adjust the URL as needed)
function openLogs() {
  window.location.href = "logs.html";
}

// Function to report phishing (adjust the URL as needed)
function reportPhishing() {
  window.location.href = "report.html";
}
