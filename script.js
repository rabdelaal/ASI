
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name === "" || email === "" || message === ""){
             alert("Please fill out all fields.");
             return;
        }
        if (!isValidEmail(email)) {
           alert("Please enter a valid email address.");
           return;
        }


        alert('Form submitted successfully!');
        form.reset();

    });

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+[@][^\s@]+[\.][^\s@]+$/;
      return emailRegex.test(email);
     }
});
