$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar.fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
})

const productWrapper = document.getElementsByClassName('product-img-wrapper')
const productImg = document.getElementsByClassName ('product-img');

for(let i=0;i<productWrapper.length;i++){
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

AOS.init({
  duration: 1400
})