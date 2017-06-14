
//function to open menu burguer

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


//function to control resize when menu is open in movile size
function mediaQueryMenu(){
  var currentWindowSize = window.innerWidth;
  var breakpointDesktop = "800";
  var items = document.querySelector(".nav-movile");

  if (currentWindowSize>breakpointDesktop){
    items.classList.remove("active");
    }
}

addEventListener("resize", mediaQueryMenu);

//fuction that change the burguer into a cross
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

//open modal window
var openModal = document.querySelector(".modalBnt");

function openModalWindow() {
  var modalBntOpen = document.querySelector('.about-modal');
    modalBntOpen.classList.remove('active', "non-active");
    modalBntOpen.classList.add('active');
}

openModal.addEventListener("click",openModalWindow);

//close modal window
var closeWindow = document.querySelector(".close-modalBnt");

function hideWindow() {
  var modalElement = document.querySelector('.about-modal');
    modalElement.classList.remove('active');
    modalElement.classList.add('non-active');
}

closeWindow.addEventListener("click",hideWindow);

//function that change the modal text



/* ejercicio modal alex
function Modal(options) {
  this.text = options.text;
  this.title = options.title;
  this.subtitle = options.subtitle;

  if (options.hasOwnProperty('image')) {
    this.image = options.image;
  } else {
    this.image = null;
  }
}

Modal.prototype.activate = function() {
  var modalElement = document.querySelector('#modal');

  var imageHTML;

  if (this.image !== null) {
    imageHTML = '<img class="modal-image" src="' + this.image + '">';
  } else {
    imageHTML = 'No hay imagen';
  }

  modalElement.innerHTML = imageHTML;
}

var options1 = {
  image: 'images/logo_jrf_block_footer.jpg',
  title: 'Modal de prueba',
  subtitle: 'Lorem ipsum dolor sit amet',
  text: ', consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}


var modal1 = new Modal(options1);

modal2.activate();*/
