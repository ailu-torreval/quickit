fetch("http://magmadesign.dk/wp21/wp-json/wp/v2/restaurant?_embed&per_page=100")
  .then((res) => res.json())

  .then(gotData);

function gotData(restaurants) {
  restaurants.forEach(showRest);
}

function showRest(rest) {
  console.log(rest.address);
  console.log(rest.logo.guid);
  const shCard = document.querySelector("#partner-template").content;
  const clone = shCard.cloneNode(true);
  clone.querySelector(".partner-logo").src = rest.logo.guid;

  const aEl = clone.querySelector(".partner-li");
  aEl.addEventListener("click", showPopUp);
  function showPopUp(e) {
    e.preventDefault();
    document.querySelector("#partners-ul").classList.add("paused");
    document.querySelector("#partner-pop-up").classList.remove("hidden2");
    document.querySelector("#partner-name").textContent = rest.r_name;
    document.querySelector("#partner-address").textContent = rest.address;
    document.querySelector("#partner-cuisine").textContent = rest.cuisine;
    document.querySelector("#partner-ref").innerHTML = rest.review;
    document.querySelector("#pop-up-logo").src = rest.logo.guid;
    document
      .querySelector("#close-button")
      .addEventListener("click", closePopUp);
  }
  const parent = document.querySelector("#partners-ul");
  parent.appendChild(clone);
}

function closePopUp() {
  console.log("close button");
  document.querySelector("#partner-pop-up").classList.add("hidden2");
  document.querySelector("#partners-ul").classList.remove("paused");
}

document.querySelector("#next1").addEventListener("click", showStep2);
document.querySelector("#burger-icon").addEventListener("click", showMenu);
document.querySelector("#b-next1").addEventListener("click", showBenefits2);
// document.querySelector("#b-prev1").addEventListener("click", showBenefits3);

function showBenefits2() {
  document.querySelector("#benefits-slide1").classList.add("hidden2");
  document.querySelector("#benefits-slide3").classList.add("hidden2");
  document.querySelector("#benefits-slide2").classList.remove("hidden2");
  document.querySelector("#benefit-txt2").classList.add("txt-appear");
  document.querySelector("#benefit2-img").classList.add("txt-appear");
  document.querySelector("#b-next2").addEventListener("click", showBenefits3);
  document.querySelector("#b-prev2").addEventListener("click", showBenefits1);
}

function showBenefits3() {
  document.querySelector("#benefits-slide2").classList.add("hidden2");
  document.querySelector("#benefits-slide1").classList.add("hidden2");
  document.querySelector("#benefits-slide3").classList.remove("hidden2");
  document.querySelector("#benefit-txt3").classList.add("txt-appear");
  document.querySelector("#benefit3-img").classList.add("txt-appear");
  document.querySelector("#b-next3").addEventListener("click", showBenefits1);
  document.querySelector("#b-prev3").addEventListener("click", showBenefits2);
}

function showBenefits1() {
  document.querySelector("#benefits-slide2").classList.add("hidden2");
  document.querySelector("#benefits-slide3").classList.add("hidden2");
  document.querySelector("#benefits-slide1").classList.remove("hidden2");
  document.querySelector("#benefit-txt1").classList.add("txt-appear");
  document.querySelector("#benefit1-img").classList.add("txt-appear");
  document.querySelector("#b-next1").addEventListener("click", showBenefits2);
  document.querySelector("#b-prev1").addEventListener("click", showBenefits3);
}

function showMenu() {
  console.log("show-menu");
  document.querySelector("#burger-icon").classList.add("hidden2");
  document.querySelector("#burger-icon").classList.add("burger-dissapear");
  document.querySelector("#close-menu").classList.add("burger-appear");
  document.querySelector("#close-menu").classList.remove("hidden2");
  document.querySelector(".burger-menu").classList.remove("hidden2");
  document.querySelector(".burger-menu").classList.add("show-menu");
  document.querySelector("#close-menu").addEventListener("click", closeMenu);
  document.querySelector("#tut-btn").addEventListener("click", closeMenu);
  document.querySelector("#benefits-btn").addEventListener("click", closeMenu);
  document.querySelector("#mkt-btn").addEventListener("click", closeMenu);
  document.querySelector("#abus-btn").addEventListener("click", closeMenu);
  document.querySelector("#demo-btn").addEventListener("click", closeMenu);
}

function closeMenu() {
  // document.querySelector(".burger-menu").classList.add("hide-menu");
  document.querySelector("#close-menu").classList.add("hidden2");
  document.querySelector("#close-menu").classList.add("burger-dissapear");
  document.querySelector("#burger-icon").classList.add("burger-appear");
  document.querySelector("#burger-icon").classList.remove("hidden2");
  document.querySelector(".burger-menu").classList.add("hidden2");
}

function showStep2() {
  document.querySelector("#step1").classList.add("hidden2");
  document.querySelector("#step3").classList.add("hidden2");
  document.querySelector("#step2").classList.remove("hidden2");
  document.querySelector("#step2-info").classList.add("txt-appear");
  document.querySelector("#next2").addEventListener("click", showStep3);
  document.querySelector("#prev2").addEventListener("click", showStep1);
}

function showStep1() {
  document.querySelector("#step2").classList.add("hidden2");
  document.querySelector("#step1").classList.remove("hidden2");
  document.querySelector("#step1-info").classList.add("txt-appear");
  document.querySelector("#next1").addEventListener("click", showStep2);
}

function showStep3() {
  document.querySelector("#step2").classList.add("hidden2");
  document.querySelector("#step4").classList.add("hidden2");
  document.querySelector("#step3").classList.remove("hidden2");
  document.querySelector("#step3-info").classList.add("txt-appear");
  document.querySelector("#next3").addEventListener("click", showStep4);
  document.querySelector("#prev3").addEventListener("click", showStep2);
}

function showStep4() {
  document.querySelector("#step3").classList.add("hidden2");
  document.querySelector("#step4").classList.remove("hidden2");
  document.querySelector("#step4-info").classList.add("txt-appear");
  document.querySelector("#prev4").addEventListener("click", showStep3);
}
