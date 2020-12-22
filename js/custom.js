//_ AOS //
AOS.init({
  duration: 1400
})

//_ HEADER COLOR CHANGE //
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar.fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
})

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

//_ ANCHOR OFFSET //
// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);