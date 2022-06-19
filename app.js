//changing card after sumbiting
const sumbitBtn = document.querySelector("button");
sumbitBtn.onclick = () => {
  const ratingSection = document.querySelector(".rating");
  ratingSection.classList.add("display-none");

  const thanksSection = document.querySelector(".thanks");
  thanksSection.classList.remove("display-none");
};

//select rating
const ratingSpans = document.querySelectorAll(".rating-count span");
let rating = "5";
for (let i = 0; i < ratingSpans.length; i++) {
  ratingSpans[i].onclick = () => {
    ratingSpans[i].classList.toggle("active");
    rating = ratingSpans[i].textContent;
    document.querySelector(".thanks span").textContent = rating;
    console.log(rating);
    for (let j = 0; j < ratingSpans.length; j++) {
      if (i !== j) ratingSpans[j].classList.remove("active");
    }
  };
}
