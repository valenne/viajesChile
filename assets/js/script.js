///////////////////////////////////////////////////////////

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // // previene que al apretar link, nos lleve a tal posicion
    // e.preventDefault();

    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);

      sectionEL.scrollIntoView({ behavior: "smooth" });
    }
  });
});

///////////////////////////////////////////////////////////

// COLOR CHANGE ON BANNER "QUIENES SOMOS"

const descBox = document.getElementsByClassName("description__box");
// console.log(card);

const descIcon = document.getElementsByClassName("description__icon");
// console.log(cardBody);

// // define el elemento que contiene la clase
// const divIcon = document.querySelector(".contiene");

for (let i = 0; i < descBox.length; i++) {
  descBox[i].addEventListener("mouseover", function () {
    descIcon[i].classList.toggle("desc__icon--box");

    if (descIcon.classList.contains("desc__icon--box")) {
      descIcon.classList.toggle("desc__icon--box");
    }
  });

  descBox[i].addEventListener("mouseout", function () {
    descIcon[i].classList.toggle("desc__icon--box");

    if (descIcon.classList.contains("desc__icon--box")) {
      descIcon.classList.toggle("desc__icon--box");
    }
  });
}

///////////////////////////////////////////////////////////

// COLOR CHANGE ON CARD ON MOUSEOVER AND MOUSEOUT
const card = document.getElementsByClassName("card");
// console.log(card);

const cardBody = document.getElementsByClassName("card-body");
// console.log(cardBody);

// define el elemento que contiene la clase
const divCard = document.querySelector(".contiene");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("mouseover", function () {
    cardBody[i].classList.toggle("card-body--hover");

    // defino si la variable(elemento) contiene la clase x
    if (divCard.classList.contains("card-body--hover")) {
      cardBody.classList.toggle("card-body--hover");
    }
  });

  card[i].addEventListener("mouseout", function () {
    cardBody[i].classList.toggle("card-body--hover");

    if (divCard.classList.contains("card-body--hover")) {
      cardBody.classList.toggle("card-body--hover");
    }
  });
}

///////////////////////////////////////////////////////////

// HIDE DESCRIPTION ON QUERIES @media (max-width: 351.98px)

// _________________----------------------___________

// const xMatch = window.matchMedia("(max-width: 351.98px)");
// const dText = document.getElementsByClassName("description__text");

// const x = document.getElementsByClassName("hideClick");
// console.log(dText);

// for (i = 0; i < x.length; i++) {
//   x[i].addEventListener("click", function () {
//     if (xMatch.matches) {
//       dText[i].classList.toggle("description__text--block");
//     }
//   });
// }

///////////////////////////////////////////////////////////
// COLOR CHANGE BG-IMG FORM"

const bgPress = document.getElementsByClassName("cta");

const ctabg = document.getElementById("bgChange");
// const bgButton = document.getElementsByClassName("btn");
// console.log(bgButton);

// const ctabg = document.getElementById("bgChange");

for (let i = 0; i < bgPress.length; i++) {
  bgPress[i].addEventListener("click", (e) => {
    ctabg.classList.toggle("cta__other--bg");
    ctabg.style.transition = "all 1s";
  });
}

///////////////////////////////////////////////////////////\
