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
        window.location.href = "message.html";

        // Optionally, you can clear the form fields
        nameInput.value = "";
        emailInput.value = "";
        feedbackTextarea.value = "";
      } else {
        var errorMessage = "Please fill in all fields.";
        feedbackMessageContainer.textContent = errorMessage;
      }
    });
  });
  