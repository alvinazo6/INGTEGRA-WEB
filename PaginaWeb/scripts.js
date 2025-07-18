// Modal para galería y productos
function openModal(imgSrc, caption) {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  modal.style.display = "flex";
  modalImg.src = imgSrc;
  modalImg.alt = caption;
  modalCaption.textContent = caption;
}
function closeModal() {
  document.getElementById("galleryModal").style.display = "none";
}
// Permite cerrar modal con ESC
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});
window.onclick = function(event) {
  const modal = document.getElementById("galleryModal");
  if (event.target == modal) closeModal();
};

// Scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Slider de imágenes
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.slider-img');
  let current = 0;
  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 5000); // 5 segundos
});