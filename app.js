const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        //else{
            //entry.target.classList.remove('show');
        //}
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


document.querySelectorAll('.AESlider img').forEach((img) => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
    });
});


document.querySelectorAll('.main-slider img').forEach((img) => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
    });
});

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
}


// Modal elements
const modal       = document.getElementById('review-modal');
const overlay     = modal.querySelector('.modal-overlay');
const closeBtn    = modal.querySelector('.modal-close');
const titleEl     = modal.querySelector('.modal-title');
const authorEl    = modal.querySelector('.modal-author');
const descEl      = modal.querySelector('.modal-description');
const thoughtsEl  = modal.querySelector('.modal-thoughts');

// Open modal when clicking a book cover
document.querySelectorAll('.reviews-slider .item img').forEach(img => {
  img.addEventListener('click', () => {
    const item = img.closest('.item');
    // Populate header info
    titleEl.textContent  = item.dataset.title;
    authorEl.textContent = 'by ' + item.dataset.author;
    // Pull full HTML from hidden .details block
    const details = item.querySelector('.details');
    descEl.innerHTML     = details.querySelector('.full-description').innerHTML;
    thoughtsEl.innerHTML = details.querySelector('.reader-thoughts').innerHTML;
    modal.classList.add('show');
  });
});

// Close on overlay or “×”
[overlay, closeBtn].forEach(el =>
  el.addEventListener('click', () => modal.classList.remove('show'))
);
