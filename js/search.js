const searchField = document.querySelector('.search-field');
const searchSedona = document.querySelector(".button-seach-sedona");
const dateOn = searchField.querySelector("[name=date-on]");
const dateOff = searchField.querySelector("[name=date-off]");
const amountPeople = searchField.querySelector("[name=amount-of-people]");
const amountChild = searchField.querySelector("[name=amount-of-child]");
const form = searchField.querySelector("form"); 

searchSedona.addEventListener("click", function() {
  searchField.classList.toggle('search-field-none');
  dateOn.focus();
});



//form.addEventListener("submit", function () {
  //  evt.preventDefault(); 
    //localStorage.setItem("amount", amount.value);
    

    //});



 