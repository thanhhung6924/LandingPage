var btn = document.querySelector(".search-box__button");
var navbar = document.querySelector(".navbar");

btn.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  this.classList.toggle("open");
  this.parentElement.querySelector(".search-box__input").focus();
  this.parentElement
    .querySelector(".search-box__input")
    .classList.toggle("open");

  if (navbar.classList.contains("hidden")) {
    // Delay removing the hidden class by 1 second (1000 milliseconds)
    setTimeout(() => {
      navbar.classList.remove("hidden");
    }, 400);
  } else {
    navbar.classList.add("hidden");
  }
});
///////////
const pages = document.querySelectorAll(".item__img");
const getdots = document.querySelectorAll(".dot");
let currentIndex = 0;
let isClickable = true;
const clickDelay = 1500; // 1.5 seconds

function setActivePage(index) {
  pages[currentIndex].classList.remove("active");
  getdots[currentIndex].classList.remove("active");

  if (index > currentIndex || (index==0&&currentIndex==2)  ) {
   
    pages[currentIndex].classList.add("disappearonleft");
    $(pages[currentIndex]).one("webkitAnimationEnd", function (event) {
      this.classList.remove("disappearonleft");
    });
    pages[index].classList.add("appearonright");
    $(pages[index]).one("webkitAnimationEnd", function (event) {
      this.classList.remove("appearonright");
    });
  } else if ( (index==2&&currentIndex==0)||index < currentIndex ) {
    pages[currentIndex].classList.add("disappearonright");
    $(pages[currentIndex]).one("webkitAnimationEnd", function (event) {
      this.classList.remove("disappearonright");
    });
    pages[index].classList.add("appearonleft");
    $(pages[index]).one("webkitAnimationEnd", function (event) {
      this.classList.remove("appearonleft");
    });
  }

  pages[index].classList.add("active");
  getdots[index].classList.add("active");
  currentIndex = index;
}
var tg=setInterval(() => {
  if (isClickable) {
  
     var nextIndex = currentIndex + 1;
   
   }
   if (nextIndex == pages.length) {
    nextIndex = 0;
  } setActivePage(nextIndex);
 }, 3000);
$(".next__icon").click(function (event) {
  clearInterval(tg)
  if (!isClickable) return;
  isClickable = false;

  let nextIndex = currentIndex+1 ;
  if (nextIndex == pages.length) {
    nextIndex = 0;
  }

  setActivePage(nextIndex);

  setTimeout(() => {
    isClickable = true;
  }, clickDelay);
});

$(".prev__icon").click(function (event) {
  clearInterval(tg)
  if (!isClickable) return;
  isClickable = false;

  let prevIndex = currentIndex-1;
  if (prevIndex == -1) {
    prevIndex = pages.length - 1;
  }

  setActivePage(prevIndex);

  setTimeout(() => {
    isClickable = true;
  }, clickDelay);
});

$(".dot").click(function (event) {
  if (!isClickable) return;
  isClickable = false;

  let dotIndex = $(this).index();

  if (dotIndex !== currentIndex) {
    setActivePage(dotIndex);
  }

  setTimeout(() => {
    isClickable = true;
  }, clickDelay);
});
