var buttonClick = document.querySelector(".menu-icon-btn");

function openMenu() {
  var navMenu = document.querySelector('.nav-movile');
  var buttonIconCross = document.querySelector(".menu-icon-cross");
  var buttonIconList = document.querySelector(".menu-icon-list");
  navMenu.classList.toggle('active');
  buttonIconCross.classList.toggle("active");
  buttonIconList.classList.toggle("non-active");
}

buttonClick.addEventListener("click",openMenu);

function mediaQueryMenu(){
  var currentWindowSize = window.innerWidth;
  var breakpointDesktop = "800";
  var items = document.querySelector(".nav-movile");

  if (currentWindowSize>breakpointDesktop){
    items.classList.remove("active");
    }
}

addEventListener("resize", mediaQueryMenu);

function changeIcon(){
  var currentWindowSize = window.innerWidth;
  var breakpointDesktop = "800";
  var cross = document.querySelector(".menu-icon-cross");
  var list= document.querySelector(".menu-icon-list");

  if (currentWindowSize<breakpointDesktop){
    cross.classList.remove("active");
    list.classList.remove("non-active");
    list.classList.add("active");
    }
}

addEventListener("resize", changeIcon);



// cuando clikeamos fuera del menu desplegado lo ocultamos:
