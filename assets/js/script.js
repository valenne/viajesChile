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

// COLOR CHANGE ON CARD ON MOUSEOVER AND MOUSEOUT
const card = document.getElementsByClassName("card");

console.log(card);

const cardBody = document.getElementsByClassName("card-body");
console.log(cardBody);

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("mouseover", function () {
    cardBody[i].classList.toggle("card-body--hover");

    if (cardBody.classList.contains("card-body--hover"))
      cardBody.classList.toggle("card-body--hover");
  });

  card[i].addEventListener("mouseout", function () {
    cardBody[i].classList.toggle("card-body--hover");

    if (cardBody.classList.contains("card-body--hover"))
      cardBody.classList.toggle("card-body--hover");
  });
}

///////////////////////////////////////////////////////////
// COLOR CHANGE ON BANNER "QUIENES SOMOS"

const descBox = document.getElementsByClassName("description__box");
console.log(card);

const descIcon = document.getElementsByClassName("description__icon");
console.log(cardBody);

for (let i = 0; i < descBox.length; i++) {
  descBox[i].addEventListener("mouseover", function () {
    descIcon[i].classList.toggle("desc__icon--box");

    if (descIcon.classList.contains("desc__icon--box"))
      descIcon.classList.toggle("desc__icon--box");
  });

  descBox[i].addEventListener("mouseout", function () {
    descIcon[i].classList.toggle("desc__icon--box");

    if (descIcon.classList.contains("desc__icon--box"))
      descIcon.classList.toggle("desc__icon--box");
  });
}

///////////////////////////////////////////////////////////
// COLOR CHANGE BG-IMG FORM"
