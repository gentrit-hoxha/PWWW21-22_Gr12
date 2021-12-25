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







function checkMessage() {
    let message_value = contactMessage.value;
    
    if (message_value === "") {
        setErrorFor(contactMessage, "Ju lutem shenoni nje mesazh mos e lini te zbrazet"); 
        }

        else if ((message_value.length)<80) {
            setErrorFor(contactMessage, "Mesazhi duhet te permbaje me shume se 30 karaktere");
        }

        else{
            setSuccessFor(contactMessage, "Hapesira e mesazhit eshte ne rregyll");
    }
}



function setErrorFor(input, message) {
    var formControl = input;
    formControl.className = 'error';


    var small = formControl.nextElementSibling;
    small.innerText = message;
    small.className = 'errorMsg yes';
}



function setSuccessFor(input, message) {
    const formControl = input;
    formControl.className = 'success';



     var small = formControl.nextElementSibling;
     small.textContent = message;
     small.className = 'successMsg yes';
}
