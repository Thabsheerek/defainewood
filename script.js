
function doSearch(){
  alert("Searching: " + 
    (document.getElementById('q').value || 'anywhere')
    + " (" +
    (document.getElementById('duration').value || 'any duration')
    + ")");
}

function submitQuote(e){
  e.preventDefault();
  alert("Thanks, " + document.getElementById("name").value);
  document.getElementById("quoteForm").reset();
}

  function submitContact(event) {
    event.preventDefault(); // stop normal form submit

    // Get form values
    const name = document.getElementById("cname").value;
    const email = document.getElementById("cemail").value;
    const phone = document.getElementById("cphone").value;
    const message = document.getElementById("cmessage").value;

    // WhatsApp number (with country code, no +)
    const whatsappNumber = "919995522895"; // 🔴 replace with YOUR number

    // Create WhatsApp message
    const whatsappMessage = 
      `Hello, I would like to enquire about a trip.%0A%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Phone: ${phone}%0A%0A` +
      `Message:%0A${message}`;

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  }

function scrollToContact(){
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dot = document.querySelectorAll('.hero-dots .dot');
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dot[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  resetAutoSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
  resetAutoSlide();
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 3000);
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

startAutoSlide();
new Swiper(".packageSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 3
    }
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
 function goToSlide(index) {
  showSlide(index);
}
  // Fade-in on scroll
const serviceCards = document.querySelectorAll('.service-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

serviceCards.forEach(card => observer.observe(card));

// WhatsApp click
function openWhatsApp(serviceName) {
  const phone = "919995522895";
  const message = `Hello WhereToGo Holidays, I am interested in: ${serviceName}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// Mobile dots indicator
const serviceRow = document.querySelector('#services .row');
const dots = document.querySelectorAll('.service-indicators .dot');

serviceRow.addEventListener('scroll', () => {
  const scrollLeft = serviceRow.scrollLeft;
  const scrollWidth = serviceRow.scrollWidth - serviceRow.clientWidth;
  const totalSlides = dots.length;
  const index = Math.round((scrollLeft / scrollWidth) * (totalSlides - 1));
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
});
const tripCards = document.querySelectorAll('.trip-card');

const tripObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

tripCards.forEach(card => tripObserver.observe(card));

  new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      }
    }
  });



