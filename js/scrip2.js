var header = document.getElementById("meu-header");
var tituloElement = document.getElementById("title");

var images = ["../img/outros/campo.jpg" , "../img/outros/campo3.jpg" , "../img/outros/campo4.jpg"];
var titulos = ["Podutos Locais e Naturais", "Produtos saudaveis para si sua familia", "Qualidade é connosco"];
var currentIndex = 0;

function alterarImagem() {
  if (currentIndex === images.length) {
    currentIndex = 0;
  }

  header.style.backgroundImage = "url('" + images[currentIndex] + "')";
  tituloElement.textContent = titulos[currentIndex];
  currentIndex++;
}

function iniciarIntervalo() {
  setInterval(alterarImagem, 7000);
}

header.addEventListener("click", alterarImagem);
iniciarIntervalo();

//Carrocel

const controls = document.querySelectorAll(".btt")
let currentimg = 0;
const imgs = document.querySelectorAll(".img")
const maximg = imgs.length;

controls.forEach(btt => {
  btt.addEventListener("click", () =>{
    const isleft = btt.classList.contains("prev-button");
    if (isleft) {
      currentimg -= 1;
    } else{
      currentimg += 1;
    }
    if (currentimg >= maximg){
      currentimg = 0;
    }
    if (currentimg < 0){
      currentimg = maximg -1;
    }
    imgs.forEach(img => img.classList.remove("item"));
    imgs[currentimg].scrollIntoView({
      inline:"center",
     behavior:"smooth"
    });
    imgs[currentimg].classList.add('item');
    console.log("btt" , isleft , currentimg);
  });
});

//Carrocel-Tubérculos
const tube_controls = document.querySelectorAll(".btt_tube")
let current_img_tube = 0;
const imgs_tube = document.querySelectorAll(".img_tube")
const max_img_tube = imgs_tube.length;

tube_controls.forEach( btt_tube => {
  btt_tube.addEventListener("click", () =>{
    const isleft = btt_tube.classList.contains(" prev-button_tube");
    if (isleft) {
      current_img_tube -= 1;
    } else{
      current_img_tube += 1;
    }
    if ( current_img_tube >=  max_img_tube){
      current_img_tube  = 0;
    }
    if ( current_img_tube< 0){
      current_img_tube = max_img_tube -1;
    }
    imgs_tube.forEach(img_tube => img_tube.classList.remove("item_tube"));
    imgs_tube[ current_img_tube].scrollIntoView({
      inline:"center",
     behavior:"smooth"
    });
    imgs_tube[ current_img_tube].classList.add('item_tube');
    console.log("btt" , isleft ,  current_img_tube);
  });
});

//Carrocel-Legumes
const leg_controls = document.querySelectorAll(".btt_leg")
let current_img_leg = 0;
const imgs_leg = document.querySelectorAll(".img_leg")
const max_img_leg = imgs_leg.length;

leg_controls.forEach( btt_leg => {
  btt_leg.addEventListener("click", () =>{
    const isleft = btt_leg.classList.contains(" prev-button_tube");
    if (isleft) {
      current_img_leg -= 1;
    } else{
      current_img_leg += 1;
    }
    if ( current_img_leg >=  max_img_leg){
      current_img_leg  = 0;
    }
    if ( current_img_leg< 0){
      current_img_leg = max_img_leg -1;
    }
    imgs_leg.forEach(img_leg => img_leg.classList.remove("item_tube"));
    imgs_leg[ current_img_leg].scrollIntoView({
      inline:"center",
     behavior:"smooth"
    });
    imgs_leg[ current_img_leg].classList.add('item_tube');
    console.log("btt" , isleft ,  current_img_leg);
  });
});
//Carrocel-Cereais
const cer_controls = document.querySelectorAll(".btt_cer")
let current_img_cer = 0;
const imgs_cer = document.querySelectorAll(".img_cer")
const max_img_cer = imgs_cer.length;

cer_controls.forEach( btt_cer => {
  btt_cer.addEventListener("click", () =>{
    const isleft = btt_cer.classList.contains(" prev-button_tube");
    if (isleft) {
      current_img_cer -= 1;
    } else{
      current_img_cer += 1;
    }
    if ( current_img_cer >=  max_img_cer){
      current_img_cer  = 0;
    }
    if ( current_img_cer< 0){
      current_img_cer = max_img_cer -1;
    }
    imgs_cer.forEach(img_cer => img_cer.classList.remove("item_tube"));
    imgs_cer[ current_img_cer].scrollIntoView({
      inline:"center",
     behavior:"smooth"
    });
    imgs_cer[ current_img_cer].classList.add('item_tube');
    console.log("btt" , isleft ,  current_img_cer);
  });
});