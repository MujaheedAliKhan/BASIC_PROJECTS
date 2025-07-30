 // Get references to the HTML elements
 const startButton = document.getElementById('start-btn');
 const dateTimeInput = document.getElementById('date-time');
 const countdownDisplay = document.getElementById('countdown');
 const resetBtn = document.getElementById('reset-btn');

 let countdownInterval; // Variable to store the interval ID

 // Function to start the countdown
 function startCountdown() {
     const targetDate = new Date(dateTimeInput.value); // Get the user's input

     // Check if the input is a valid date
     if (isNaN(targetDate.getTime())) {
         countdownDisplay.textContent = 'Please enter a valid date and time.';
         return;
     }

     // Clear any existing countdown interval
     clearInterval(countdownInterval);
    
     // Function to update the countdown
     function updateCountdown() {
         const now = new Date(); // Current date and time
         const timeRemaining = targetDate - now; // Difference in milliseconds

         // If the countdown is over
         if (timeRemaining <= 0) {
             clearInterval(countdownInterval); // Stop the countdown
             countdownDisplay.textContent = 'Time is up!';
             return;
         }

         // Convert milliseconds to days, hours, minutes, and seconds
         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

         // Display the countdown
         countdownDisplay.textContent = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
     }

     // Update the countdown immediately and then every second
     updateCountdown();
     countdownInterval = setInterval(updateCountdown, 1000);
 }

 
 function resetCountdown() {
    clearInterval(countdownInterval); // Stop any running countdown
    dateTimeInput.value = ''; // Clear the input field
    countdownDisplay.textContent = 'Enter a date and time to start the countdown.'; // Reset the display
}

 // Add an event listener to the Start button
 startButton.addEventListener('click', startCountdown);
 resetBtn.addEventListener('click', resetCountdown);