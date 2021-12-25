console.log("contact form author: jetmir halili");

const signUp = document.getElementById("contact-form");

const firstName = document.getElementById("name");
const lastName = document.getElementById("surname");
const contactEmail = document.getElementById("email");
const contactMessage = document.getElementById("message");


signUp.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkfirstName();
    checkLastName();
    checkMail();
    checkMessage();

}); 





