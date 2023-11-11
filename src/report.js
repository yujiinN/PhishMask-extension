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
          window.location.href = "home.html";
        }, 1000);
  
        // Optionally, you can clear the form field
        reportTextarea.value = "";
      } else {
        var errorMessage = "Please enter a phishing URL.";
        reportMessageContainer.textContent = errorMessage;
      }
    });
  });
  