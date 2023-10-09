const menu_slide = document.getElementById("activo")
const contenedor= document.getElementById("contenedor")
const botones= document.getElementById("botones")
const qr= document.getElementById("qr")
const qr2=document.getElementById("qr2")
const image_slide=document.getElementById("image_slide")
const texto_slide=document.querySelector(".instalacion")

//function to do big and small the slide menu
menu_slide.onclick = function () {
  if(contenedor.className=="contenedor active2"){
    contenedor.className="contenedor"
    botones.className="botones"
    qr2.className="qr2"
  }
    menu_slide.classList.toggle("active")
    contenedor.classList.toggle("active")
    botones.classList.toggle("active")
  }

  //function to show code qr in slide menu
  qr.onclick = function () {
    qr2.classList.toggle("active2")
    qr.classList.toggle("active2")
    contenedor.classList.toggle("active2")
    botones.classList.toggle("active2")
  }

  //function to show images in service area
  function imgURL(item){
    image_slide.src=item;
    texto_slide.classList.toggle("active") 
}


const menu_toogle_header=document.querySelector(".menutoogle")
const ionicon_header=document.getElementById("menu_toogle")
const menu_nav=document.querySelector(".menu")

menu_toogle_header.onclick = function () {
  menu_toogle_header.classList.toggle("active")
  ionicon_header.classList.toggle("active")
  menu_nav.classList.toggle("active")
}

image_slide.onclick = function () {
  location.href =image_slide.src
}



  