/*** FONCTION POUR L'APPARTITION FADE-IN ***/

// Fonction qui sera appelée chaque fois que l'élément observé
// entre ou sort du viewport. 
const handleIntersect = (entries) => {
   entries.forEach((entry) => {
      // Si présent dans le viewport, ajoutez la classe 'anim'.
      if (entry.isIntersecting) {
         entry.target.classList.add("anim");
      } else {
         // Retirer la classe 'anim'.
         entry.target.classList.remove("anim");
      }
   });
};

const observer = new IntersectionObserver(handleIntersect);

const elementToObserve = document.querySelectorAll("section, article, .title_up, .title_up--second");

elementToObserve.forEach((element) => {
   observer.observe(element);
});

/** SECTION APPARITION FADE-IN BANNIERE **/

const handleReverse = (entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("anim__reverse");
         entry.target.classList.remove("anim");
      } else {
         entry.target.classList.remove("anim__reverse");
      }
   });
};

const observer_reverse = new IntersectionObserver(handleReverse);

const elementToObserve_reverse = document.querySelector(".banner");

observer_reverse.observe(elementToObserve_reverse);

/*** MODIF APPARENCE BOUTON MENU ***/

document.addEventListener("DOMContentLoaded", function () {
   let but = document.querySelector("button");

   but.addEventListener("click", function () {
      but.classList.toggle("croix");
   });
});

let burgerButton = document.querySelector("button");
let navMenu = document.querySelector(".main-navigation");

// Ajoutez un gestionnaire d'événements au clic sur chaque lien du menu
document.querySelectorAll(".nav-menu li").forEach(function (link) {
   link.addEventListener("click", function () {
      if (navMenu.classList.contains("toggled")) {
         // Suppression de la classe si présente
         navMenu.classList.remove("toggled");
         // réinitialisation de l'état du bouton burger
         burgerButton.classList.remove("croix");
      }
   });
});

/**** EFFET PARALLAX BANNIERE ****/

window.addEventListener("scroll", () => {
   let scroll = window.scrollY;
   document.querySelector(".text-banner").style.transform = `translateY(${scroll * 0.7}px)`;
});

//******* FONCTION POUR GERER LE DEPLACEMENT DES NUAGES *******/

function isElementInViewport(el) {
   const rect = el.getBoundingClientRect();
   return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function moveelement(element,vitesse,limite) {
    let windowHeight = window.innerHeight;
    let elementop = element.getBoundingClientRect().top;
    let haut = elementop - windowHeight;
   let translation = haut * vitesse;
   if (translation > -limite) {
    element.style.transform = 'translateX(' + translation + 'px)';
   } else {
    element.style.transform = 'translateX(-' + limite + 'px)';
    }
}
function handleScroll() {
   const Cloud = document.querySelector(".cloud");
   const limite = 300;
   const vitesse = 0.31;
   // Vérifiez si l'élément est visible

   if (isElementInViewport(Cloud)) {
    moveelement(Cloud,vitesse,limite);
    }
}
window.addEventListener("scroll", handleScroll);
handleScroll();
  


/*** Initialisation du swiper ***/

var swiper = new Swiper(".mySwiper", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   loop: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
   },
});
