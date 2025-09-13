const slides = document.querySelectorAll('.header-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));

  const newSlide = slides[index];
  newSlide.classList.add('active');
}


function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto Slide
setInterval(nextSlide, 6000);

// Init
showSlide(currentSlide);

function showMenu() {
  document.querySelector('.menu').classList.add('active');
  document.querySelector('.overlay').classList.add('active');
  document.body.classList.add('no-scroll');
  const menu = document.querySelector('.menu');
  menu.style.display = 'block';
}

function hideMenu() {
  document.querySelector('.menu').classList.remove('active');
  document.querySelector('.overlay').classList.remove('active');
  document.body.classList.remove('no-scroll');
  const menu = document.querySelector('.menu');
  menu.style.display = 'none';
}

