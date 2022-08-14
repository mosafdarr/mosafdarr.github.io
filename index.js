const emailjs = require("emailjs.com")

const submitForm = (e) => {
    e.preventDeefault();

    emailjs.sendForm('gmail', 'safdar_ali', 'contact.form', '-m30AMwgwxWScidV7')
    .then(result => alert('Message Sent.'))
    .catch(err => alert('Please Try Again'))
}

document.querySelector('.submitbutton').addEventListener('click', submitForm)