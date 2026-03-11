// Ano automático
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// WhatsApp
const whatsappNumber = "5541997604218";

const message =
  "Olá Carlos! Vi seu portfólio e gostaria de conversar sobre uma oportunidade ou serviço.";

const whatsappLink =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const btnWhats = document.getElementById("btnWhats");
if (btnWhats) {
  btnWhats.href = whatsappLink;
  btnWhats.target = "_blank";
}

const whatsFloat = document.getElementById("whatsFloat");
if (whatsFloat) {
  whatsFloat.href = whatsappLink;
  whatsFloat.target = "_blank";
}

// Scroll Reveal
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.15});

revealElements.forEach(el=>observer.observe(el));
// Modal de imagem

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.querySelector(".closeModal");

const previewImages = document.querySelectorAll(".previewImage");

previewImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeModal.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
};