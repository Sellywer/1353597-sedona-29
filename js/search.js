const searchField = document.querySelector('.search-field');
const searchSedona = document.querySelector(".button-seach-sedona");
const dateOn = searchField.querySelector("[name=date-on]");
const amountPeople = searchField.querySelector("[name=amount-of-people]");
const amountChild = searchField.querySelector("[name=amount-of-child]");
const form = searchField.querySelector("form"); 

searchSedona.addEventListener("click", function() {
  searchField.classList.toggle('search-field-none');
  dateOn.focus();
});



form.addEventListener("click", function (evt) {
  evt.preventDefault();
  localStorage.setItem("amountPeople", amountPeople.value);
  localStorage.setItem("amountChild", amountChild.value);
  console.log(amountPeople.value);
  console.log(amountChild.value);
});

