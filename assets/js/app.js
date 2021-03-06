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

if ($(window).width() < 770) {
    $('.box').on('click', function() {
        $(this).children('.overlay').toggleClass('active');
    })
}

$('.dropbtn').on('click', function() {
    $('.dropbtn').toggleClass('open');
    $('.dropdown-content').toggleClass('open');
});

// Project Panel Sort
$('#sort-all').on('click', function() {
    $('.box').addClass('active');
    $('.sort').removeClass('active');
    $(this).addClass('active');
})

$('#sort-react').on('click', function() {
    addRemove($(this)); 
    $('.react').addClass('active');
})

$('#sort-vue').on('click', function() {
    addRemove($(this)); 
    $('.vue').addClass('active');
})

$('#sort-node').on('click', function() {
    addRemove($(this)); 
    $('.node').addClass('active');
})

$('#sort-c').on('click', function() {
    addRemove($(this));
    $('.c').addClass('active');
})

function addRemove(elem) {
    $('.box').removeClass('active');
    $('.sort').removeClass('active');
    elem.addClass('active');
}