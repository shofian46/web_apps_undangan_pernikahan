/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset:true
});

sr.reveal(
  `.hero, .hero__title, .hero__subtitle, .hero__description, .home, .row, .couple, .info`
);
sr.reveal(`.heart`, { delay: 500 });
sr.reveal(`.simply-countdown`, { delay: 600 });
sr.reveal(`.info, .story`, { delay: 700 });
sr.reveal(`.hero__button, .info__button`, { delay: 800, origin: "bottom" });
sr.reveal(`.logos__img`, { interval: 100 });
sr.reveal(`.home__title, .home__description, .hero__title, .hero__subtitle, .hero__description, .simply-countdown, .couple__title, .couple__subtitle, .couple__img, .info__title, .info__subtitle, .description, info__img, .story__title, .story__subtitle, .timeline-image, .timeline-panel`, { delay: 800, origin: "left" });
sr.reveal(`.couple-img, .couple-title, .couple-subtitle, .timeline-inverted, .timeline-right`, {
  delay: 800,
  origin: "right",
});


// const USERID = {
//   name: null,
//   identity: null,
//   image: null,
//   message: null,
//   date: null
// }

// const userComment = document.querySelector(".usercomment");
// const publishBtn = document.querySelector("#publish");
// const comments = document.querySelector(".comments");
// const userName = document.querySelector(".user");

// userComment.addEventListener("input", e => {
//   if (!userComment.value) {
//     publishBtn.setAttribute("disabled", "disabled");
//     publishBtn.classList.remove("abled")
//   } else {
//     publishBtn.removeAttribute("disabled");
//     publishBtn.classList.add("abled")
//   }
// })

// function addPost() {
//   if (!userComment.value) return;
//   USERID.name = userName.value;
//   if (USERID.name === "Anonymous") {
//     USERID.identity = false;
//     USERID.image = "anonymous.png"
//   } else {
//     USERID.identity = true;
//     USERID.image = "user.png"
//   }

//   USERID.message = userComment.value;
//   USERID.date = new Date().toLocaleString();
//   let published =
//     `<div class="parents">
//           <img src="assets/img/${USERID.image}">
//           <div>
//               <h4>${USERID.name}</h4>
//               <p>${USERID.pesan}</p>
//               <span class="date">${USERID.date}</span>
//           </div>
//       </div>`

//   comments.innerHTML += published;
//   userComment.value = "";
//   publishBtn.classList.remove("abled")

//   let commentsNum = document.querySelectorAll(".parents").length;
//   document.getElementById("comment").textContent = commentsNum;

// }

// publishBtn.addEventListener("click", addPost);
