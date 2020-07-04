
const storeItems = document.querySelectorAll('.store-item')
const thumbnails = document.querySelectorAll('.store-img')
const lightbox = document.querySelector('.lightbox-container');
const lightboxItem = document.querySelector('.lightbox-item');
const span = document.querySelector('.lightbox-close')



thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', (e) => {

    const img = e.target.src;
    
    console.log(lightboxItem);
    lightboxItem.style.background = `url(${img})`;
    lightbox.style.display = 'block';
    span.onclick = function() {
      lightbox.style.display = "none";
      }
  })
})