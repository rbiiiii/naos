
let galleryImg = document.getElementById('gallery_img');
let prev = document.querySelector('.gallery_btn.prev');
let next = document.querySelector('.gallery_btn.next');
let counter = 0;

next.addEventListener('click',nextSlide, false);
prev.addEventListener('click',prevSlide, false);

function goToSlide(n) {
    counter = (n + imgs.length) % imgs.length;
    changeImg(imgs[counter], n);
}

function nextSlide() {
  goToSlide(counter + 1);    
}

function prevSlide() {
  goToSlide(counter - 1);
}

function changeImg(imgItem) {    
  let path = imgItem;
  galleryImg.setAttribute('src', '/assets/uploadsOut' + path);
}