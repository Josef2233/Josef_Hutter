


/*==================== toggle icon navbar ====================*/


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    if (navbar) navbar.classList.toggle('active');
  });
}







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

if (header) {
  header.classList.toggle('sticky', window.scrollY > 100);
}

  /*
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

*/
 /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/


if (menuIcon) menuIcon.classList.remove('bx-x');
if (navbar) navbar.classList.remove('active');







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
/*
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode')
};
*/
/*==================== Dark/Light Mode ====================*/
let darkModeIcon = document.querySelector('#darkMode-icon');
const body = document.body;

// 1️⃣ Prüfen, ob User bereits ein Theme gespeichert hat
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.toggle("dark-mode", savedTheme === "dark");
  darkModeIcon.classList.toggle("bx-sun", savedTheme === "dark");
} else {
  // Falls nichts gespeichert → System-Theme übernehmen
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark-mode");
    darkModeIcon.classList.add("bx-sun");
  }
}

// 2️⃣ Klick-Event zum Umschalten
darkModeIcon.onclick = () => {
  body.classList.toggle('dark-mode');
  darkModeIcon.classList.toggle('bx-sun');

  // Auswahl speichern
  const theme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
};

// 3️⃣ Dynamische Reaktion auf System-Theme-Änderung
const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkMediaQuery.addEventListener("change", (e) => {
  // Nur ändern, wenn der User kein eigenes Theme gewählt hat
  if (!localStorage.getItem("theme")) {
    body.classList.toggle("dark-mode", e.matches);
    darkModeIcon.classList.toggle("bx-sun", e.matches);
  }
});









// Klick-Event zum Umschalten
darkModeIcon.onclick = () => {
  body.classList.toggle('dark-mode');
  darkModeIcon.classList.toggle('bx-sun');

  // Auswahl speichern
  const theme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
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

if (inputs.length > 0) {
  inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
      ipt.parentNode.classList.add("focus");
      ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
      if (ipt.value == "") {
        ipt.parentNode.classList.remove("not-empty");
      }
      ipt.parentNode.classList.remove("focus");
    });
  });
}







/*
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
*/




// recapcha google

const form = document.querySelector('form');

if (form) {
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
}





/*
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



*/




//figuren

/*
document.addEventListener("mousemove", (e) => {
  const figures = document.querySelectorAll(".figure");
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  figures.forEach(fig => {
    const head = fig.querySelector(".head");
    const rect = head.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;
    const angle = Math.atan2(dy, dx) * 10 / Math.PI; // Neigung
    head.style.transform = `rotate(${angle}deg)`;

    const eyes = fig.querySelectorAll(".eye");
    eyes.forEach(eye => {
      const pupil = eye.querySelector(".pupil");
      const eyeRect = eye.getBoundingClientRect();
      const ex = eyeRect.left + eyeRect.width / 2;
      const ey = eyeRect.top + eyeRect.height / 2;

      const px = Math.min(Math.max((mouseX - ex) / 10, -6), 6);
      const py = Math.min(Math.max((mouseY - ey) / 10, -6), 6);

      pupil.style.transform = `translate(${px}px, ${py}px)`;
    });

    // Gesichtsausdruck: überrascht, wenn Maus sehr nah
    const distance = Math.hypot(dx, dy);
    if (distance < 120) {
      fig.classList.add("surprised");
    } else {
      fig.classList.remove("surprised");
    }
  });
});

*/






// Figuren: Augen folgen + Kopfneigung
document.addEventListener("mousemove", (e) => {
  const figures = document.querySelectorAll(".figure");
  if (!figures.length) return;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  figures.forEach(fig => {
    const head = fig.querySelector(".head");
    if (!head) return;

    const rect = head.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;
    const angle = Math.atan2(dy, dx) * 10 / Math.PI;
    head.style.transform = `rotate(${angle}deg)`;

    const eyes = fig.querySelectorAll(".eye");
    eyes.forEach(eye => {
      const pupil = eye.querySelector(".pupil");
      if (!pupil) return;

      const eyeRect = eye.getBoundingClientRect();
      const ex = eyeRect.left + eyeRect.width / 2;
      const ey = eyeRect.top + eyeRect.height / 2;

      const px = Math.min(Math.max((mouseX - ex) / 10, -6), 6);
      const py = Math.min(Math.max((mouseY - ey) / 10, -6), 6);

      pupil.style.transform = `translate(${px}px, ${py}px)`;
    });

    const distance = Math.hypot(dx, dy);
    if (distance < 120) {
      fig.classList.add("surprised");
    } else {
      fig.classList.remove("surprised");
    }
  });
});

// Ausdruck beim Fokus auf Input-Felder
(function() { // eigener Scope, um Konflikte zu vermeiden
  const figure = document.querySelector(".figure-left");
  const inputs = document.querySelectorAll(".contact-input");

  if (figure && inputs.length) {
    inputs.forEach(input => {
      input.addEventListener("focus", () => {
        figure.classList.add("nervous");
        figure.classList.remove("happy", "surprised");
      });

      input.addEventListener("blur", () => {
        figure.classList.remove("nervous");
        figure.classList.add("happy");
      });
    });
  }
})();

// Ausdruck beim Fokus auf Input-Felder (ermutigend + Animation)
(function() { 
  const figure = document.querySelector(".figure-left");
  const inputs = document.querySelectorAll(".contact-input");

  if (figure && inputs.length) {
    inputs.forEach(input => {
      input.addEventListener("focus", () => {
        figure.classList.add("happy-encouraging");
        figure.classList.remove("happy", "surprised", "nervous");
      });

      input.addEventListener("blur", () => {
        figure.classList.remove("happy-encouraging");
        figure.classList.add("happy"); // zurück zum normalen Lächeln
      });
    });
  }
})();




/*sprechblase*/ 

document.addEventListener("DOMContentLoaded", () => {
  const figur = document.querySelector('.figure-left');
  const speech = document.querySelector('.speech-bubble');

  figur.addEventListener('click', (e) => {
    e.stopPropagation();
    speech.classList.toggle('hidden');
  });

  speech.addEventListener('click', (e) => {
    e.stopPropagation();
    speech.classList.add('hidden');
  });

  document.addEventListener('click', () => {
    speech.classList.add('hidden');
  });
});

