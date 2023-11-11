          function submitFeedback() {
          // Get values from the form
          var name = document.getElementById("name").value;
          var email = document.getElementById("email").value;
          var feedback = document.getElementById("feedback").value;

          // Display a message with the entered values
          var message = "Thank you for your feedback ";
          document.getElementById("feedbackMessage").innerText = message;
        }