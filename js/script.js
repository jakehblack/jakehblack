function copyEmailAddress() {
  // Hidden email address to be copied
  const myEmail = "jhblack27@outlook.com";
  // Copies text to clipboard
  navigator.clipboard.writeText(myEmail)
      .then(() => {
          // If copy is successful
          const button = document.querySelector('.contact-button');
          const originalText = button.textContent;
          // Displays message after clicking button
          button.textContent = 'Email address copied!';
      })
      // If an error occurs display this alert
      .catch(err => {
          console.error('Error: copyEmailAddress() failed to copy text!', err);
          alert('Failed to copy email address. Refresh page and try again.');
      });
}
