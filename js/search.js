const searchField = document.querySelector(".search-field");
const searchSedona = document.querySelector(".button-search-sedona");
const dateOn = searchField.querySelector("[name=date-on]");
const dateOff = searchField.querySelector("[name=date-off]");
const amountPeople = searchField.querySelector("[name=amount-of-people]");
const amountChild = searchField.querySelector("[name=amount-of-child]");
const form = searchField.querySelector("form");

searchSedona.addEventListener("click", function () {
  searchField.classList.toggle("active");
  searchField.classList.remove("error");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (
    !dateOn.value ||
    !dateOff.value ||
    !amountPeople.value ||
    !amountChild.value
  ) {
    searchField.classList.add("error");
  } else {
    localStorage.setItem("amountPeople", amountPeople.value);
    localStorage.setItem("amountChild", amountChild.value);
    console.log(amountPeople.value);
    console.log(amountChild.value);
  }
  setTimeout(() => searchField.classList.remove("error"), 1500);
});
