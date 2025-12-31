function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            const button = document.getElementById('contact-bttn');
            button.textContent = 'Email copied :)'
            console.log("Email address copied to clipboard")
       	})
       	.catch(er => {
      		console.error("Error copying email address to clipboard", er)
      		alert("Error copying email address. Refresh page and try again.")
       	})
}

let a = 'jhblack27';
let b = '@outlook.com';
let email;

document.getElementById('contact-bttn').addEventListener('click', () => {
    email = a + b;
    copyToClipboard(email)
})
