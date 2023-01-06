// Select Elements
let boxModal = document.querySelector(".container");
let numbers = document.querySelectorAll(".numbers ul li");
let subBtn = document.querySelector(".submit");
let chosenNumber = 0;

// Handel Active Class On li
numbers.forEach((li) => {
  li.addEventListener("click", () => {
    numbers.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    chosenNumber = li.innerHTML;
  
  });
});



// Submit Btn Event
subBtn.addEventListener("click", () => {
  boxModal.classList.add("thank")
  boxModal.innerHTML = `<img src = './images/illustration-thank-you.svg' />
  <h4>You Selected ${chosenNumber} out of ${numbers.length}</h4>
  <h3>Thank You!</h3>
  <p>We appreciate you takeing the time to give a rating if you ever need more support, don't hesitate to get in touch </p>
  `;
});
