function copyText() {
  // Gets text to copy
  const textElement = document.getElementById('copied-text');
  const textToCopy = textElement.textContent;
  // Copies text to clipboard
  navigator.clipboard.writeText(textToCopy)
      .then(() => {
          // Success message
          const button = document.querySelector('.contact-button');
          const originalText = button.textContent;
          button.textContent = 'Email address copied.';
      })
      // Error message
      .catch(err => {
          console.error('Error: failed to copy text! ', err);
          alert('Please try again...');
      });
}