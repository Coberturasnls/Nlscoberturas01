// ==========================
// NlsCoberturas
// script.js
// ==========================

// Cabeçalho muda de cor ao rolar
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("ativo");
    } else {
        header.classList.remove("ativo");
    }
});

// Rolagem suave do menu
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior:'smooth'
        });

    });

});

// ==========================
// Lightbox da Galeria
// ==========================

const imagens = document.querySelectorAll(".galeria img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.style.position = "fixed";
lightbox.style.left = "0";
lightbox.style.top = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,.9)";
lightbox.style.display = "none";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.cursor = "zoom-out";
lightbox.style.zIndex = "99999";

const imagem = document.createElement("img");

imagem.style.maxWidth = "90%";
imagem.style.maxHeight = "90%";
imagem.style.borderRadius = "12px";
imagem.style.boxShadow = "0 20px 60px rgba(0,0,0,.5)";

lightbox.appendChild(imagem);

document.body.appendChild(lightbox);

imagens.forEach(foto=>{

    foto.addEventListener("click",()=>{

        imagem.src=foto.src;

        lightbox.style.display="flex";

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

// ==========================
// Animação ao rolar
// ==========================

const elementos = document.querySelectorAll(".card, .imagem, .galeria img");

const aparecer = () => {

    const topoTela = window.innerHeight * 0.85;

    elementos.forEach(el => {

        const topo = el.getBoundingClientRect().top;

        if (topo < topoTela) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

elementos.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = ".8s";

});

window.addEventListener("scroll", aparecer);

aparecer();

// ==========================
// Menu Mobile
// ==========================

const menuBtn = document.getElementById("menu-mobile");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

    if(nav.style.display=="block"){

        nav.style.display="none";

    }else{

        nav.style.display="block";

        nav.style.position="absolute";
        nav.style.top="80px";
        nav.style.left="0";
        nav.style.width="100%";
        nav.style.background="#111";
        nav.style.padding="20px";

    }

});

// Fecha menu ao clicar

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(window.innerWidth<900){

            nav.style.display="none";

        }

    });

});

// ==========================
// Ano automático no rodapé
// ==========================

const rodape = document.querySelector("footer p:last-child");

if (rodape) {

    rodape.innerHTML =
    `© ${new Date().getFullYear()} NlsCoberturas - Todos os direitos reservados.`;

}
