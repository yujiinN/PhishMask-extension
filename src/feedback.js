function submitFeedback() {
    // Get values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;

    // Construct the message
    var message = "Thank you for your feedback";

    // Display an alert with the message
    alert(message);

    // Optionally, you can clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("feedback").value = "";

    // Redirect to the homepage
    setTimeout(function () {
        // Redirect to the homepage
        window.location.href = "home.html"; // Replace "index.html" with the actual homepage URL
      }, 950);
    }