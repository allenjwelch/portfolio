window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('gmail', 'portfolio_contact', this);
      console.log('message sent');
      alert("Thank you for your message!");

  });
}

// Scroll Animation
$('.contactLink').click(function() {
    $('html,body').animate({scrollTop: $('#contact').offset().top -30 },'slow');
})

$('.aboutLink').click(function() {
    $('html,body').animate({scrollTop: $('.about').offset().top -1 },'slow');
})

$('.portfolioLink').click(function() {
    $('html,body').animate({scrollTop: $('.projectTitle').offset().top -1 },'slow');
})
