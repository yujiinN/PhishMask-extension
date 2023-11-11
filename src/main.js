
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

  document.addEventListener("DOMContentLoaded", function () {
    let blockedCount = 0;
  
    function updateBlockedCount() {
      const blockedCountElement = document.getElementById("blockedCount");
      blockedCountElement.textContent = `(${blockedCount} ${blockedCount === 1 ? 'website' : 'websites'})`;
    }
  
    // Function to simulate detecting a phishing website
    function detectPhishingWebsite() {
      // Replace this logic with your actual phishing website detection logic
      const isPhishing = Math.random() < 0.5; // Simulating a random detection result
  
      if (isPhishing) {
        blockedCount++;
        updateBlockedCount();
        alert("Phishing website detected! Blocked count increased.");
      } else {
        alert("No phishing website detected.");
      }
    }
  
    // Example: Call the detectPhishingWebsite function when needed
    // In a real scenario, you would call this function when your detection logic determines a phishing website.
    detectPhishingWebsite();
  });