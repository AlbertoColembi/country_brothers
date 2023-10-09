var header = document.getElementById("meu-header");
var tituloElement = document.getElementById("title");

var images = ["./img/outros/campo.jpg" , "./img/outros/campo3.jpg" , "./img/outros/campo4.jpg"];
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


var our = document.getElementById("our");


var img= ["./img/outros/15639672_303.jpg" , "./img/outros/rice-g39a6285e8_1920.jpg"];
var current = 0;

function alterarImg() {
  if (current === img.length) {
    current = 0;
  }

  our.style.backgroundImage = "url('" + img[current] + "')";
  current++;
}

function starIntervalo() {
  setInterval(alterarImg, 10000);
}

our.addEventListener("click", alterarImg);
starIntervalo();
//Manter a propriedade hover do button
var menuItems = document.getElementsByClassName("item");

function handleClick(event) {
  // Remove a classe 'active' de todos os itens do menu
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }
  
  // Adiciona a classe 'active' ao item do menu clicado
  event.target.classList.add("active");
}

// Adiciona o evento de clique a cada item do menu
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", handleClick);
}
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


