/*==================== toggle icon navbar ====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};







  /*==================== scroll sections ===================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');





/*==================== scroll sections active link ====================*/



window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      });
    };
  });



  /*==================== sticky navbar ====================*/

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


 /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/


 menuIcon.classList.remove('bx-x');
 navbar.classList.remove('active');







};


 /*==================== swiper ====================*/

 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grapCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





 

/*==================== dark light mode ====================*/

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode')
};





/*==================== scroll reveal ====================*/

ScrollReveal({ 
 // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200

});



ScrollReveal().reveal('.home-content, .heading, .contact-heading h1', {origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img', {origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {origin: 'right'});











// kontaktfeld


const inputs = document.querySelectorAll(".contact-input");

inputs.forEach((ipt) => {
  ipt.addEventListener("focus", () => {
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");
  });
  ipt.addEventListener("blur", () => {
    if(ipt.value == "") {
      ipt.parentNode.classList.remove("not-empty");
    }
    ipt.parentNode.classList.remove("focus");
  });
});





// recapcha google

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse.length > 0) {
      throw new Error("Bitte Captcha ausfüllen!");
    }

    const fd = new FormData(e.target);
    const params = new URLSearchParams(fd);

    fetch('https://formspree.io/f/myzgbgyg', {
      method: "POST",
      body: params,

    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
});