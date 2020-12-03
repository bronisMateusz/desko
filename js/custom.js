//_ HEADER COLOR CHANGE //
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar.fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
})

//_ OFFER IMG ZOOM //
const productWrapper = document.getElementsByClassName('product-img-wrapper');
const productImg = document.getElementsByClassName ('product-img');

for(let i=0; i<productWrapper.length; i++){
  productWrapper[i].addEventListener('mousemove', function(e){
    let width = productWrapper[i].offsetWidth;
    let height = productWrapper[i].offsetHeight;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
  
    let imgPosX = (mouseX/width*100);
    let imgPosY = (mouseY/height*100);
    
    productImg[i].style.transform = `translate(-${imgPosX}%,-${imgPosY}%) scale(2)`;
  })

  productWrapper[i].addEventListener('mouseleave', function(){
    productImg[i].style.transform = 'translate(-50%,-50%) scale(1)';
  })
}

//_ JUMBOTRON IMAGE CHANGE //
let jumbotron = document.querySelector('.jumbotron');
let bgImg = [];
let bgIndex = 0;

bgImg[0] = "url('../pictures/slide1.jpg')";
bgImg[1] = "url('../pictures/slide2.jpg')";

function jumboSlider(){
  if(bgIndex>bgImg.length-1){
    bgIndex = 0;
  }
  jumbotron.style.backgroundImage = bgImg[bgIndex];
  bgIndex++;

  setTimeout(jumboSlider,5000);
}
window.onload = jumboSlider();

//_ AOS //
AOS.init({
  duration: 1400
})