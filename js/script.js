

let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});


let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

/*
// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
*/



//parallax
$(window).on('load', function() {
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
});


/*sec3 slider*/
const carousell = document.querySelector(".carousell"),
firstImg = carousell.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrappaer i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousell.scrollWidth - carousell.clientWidth; 
    arrowIcons[0].style.display = carousell.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousell.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousell.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});

const autoSlide = () => {
    if(carousell.scrollLeft - (carousell.scrollWidth - carousell.clientWidth) > -1 || carousell.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); 
    let firstImgWidth = firstImg.clientWidth + 14;

    let valDifference = firstImgWidth - positionDiff;

    if(carousell.scrollLeft > prevScrollLeft) { 
        return carousell.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousell.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousell.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousell.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousell.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousell.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousell.addEventListener("mousedown", dragStart);
carousell.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousell.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousell.addEventListener("touchend", dragStop);

/*hover*/
$(document).ready(function(){
  $('#sec3 .carousell img, #sec4 img').hover(
    function(){
      $(this).animate({
        marginTop: "-=1%",
      },200);
    },

    function(){
      $(this).animate({
        marginTop: "0%"
      },200);
    }
  );
});

$(document).ready(function(){
  $('#sec2 .card, #sec6 .card').hover(
    function(){
      $(this).animate({
        marginTop: "-=4%",
      },200);
    },

    function(){
      $(this).animate({
        marginTop: "0%"
      },200);
    }
  );
});





/*script 2*/

var multipleCardCarousel = document.querySelector(
    "#sec6 #carouselExampleControler"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $("#sec6 .carousel-inner")[0].scrollWidth;
    var cardWidth = $("#sec6 .carousel-item").width();
    var scrollPosition = 0;
    $("#sec6 #carouselExampleControler .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#sec6 #carouselExampleControler .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#sec6 #carouselExampleControler .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#sec6 #carouselExampleControler .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }



//pulsa connav
