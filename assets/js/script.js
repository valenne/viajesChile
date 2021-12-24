///////////////////////////////////////////////////////////

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // previene que al apretar link, nos lleve a tal posicion
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

const descripHover = document.getElementsByClassName("description__box");

const descripColor = document.getElementsByClassName("description__icon");

for (let i = 0; i < descripHover.length; i++) {
  descripHover[i].addEventListener("mouseover", () => {
    descripColor[i].classList.toggle("desc__icon--box");
    descripHover[i].classList.toggle("desc__box--border");

    if (descripColor[i].classList.contains("desc__icon--box")) {
      descripHover[i].addEventListener("mouseout", () => {
        descripColor[i].classList.remove("desc__icon--box");
        descripHover[i].classList.remove("desc__box--border");
      });
    }
  });
}
///////////////////////////////////////////////////////////

// COLOR CHANGE ON CARD ON MOUSEOVER AND MOUSEOUT

const cardHover = document.getElementsByClassName("card");

const bodyColor = document.getElementsByClassName("card-body");

for (let i = 0; i < cardHover.length; i++) {
  cardHover[i].addEventListener("mouseover", () => {
    bodyColor[i].classList.toggle("card-body--hover");

    if (bodyColor[i].classList.contains("card-body--hover")) {
      cardHover[i].addEventListener("mouseout", () => {
        bodyColor[i].classList.remove("card-body--hover");
      });
    }
  });
}

///////////////////////////////////////////////////////////

// HIDE DESCRIPTION ON QUERIES @media (max-width: 351.98px)

const appaerBoxText = document.getElementsByClassName("description__text");

// itero entre los elementos que contengan la clase "description__icon"
for (let i = 0; i < descripColor.length; i++) {
  descripColor[i].addEventListener("click", () => {
    appaerBoxText[i].classList.toggle("description__text--block");
  });
}

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
