window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('gmail', 'portfolio_contact', this);
      console.log('message sent'); 
      alert("Thank you for your message!"); 
      
  });
}