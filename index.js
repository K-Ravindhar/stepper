let steps = document.querySelectorAll(".numbers");
let lines = document.querySelectorAll(".line");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let para_list = [
  "Add contact details for further communication",
  "Add Shipping address for delivery",
  "Proceed with payment",
  "Delivered",
];
let description = document.getElementById("description");
let count = 0;

next.addEventListener("click", function () {
  if (count < steps.length - 1) {
    count++;
    steps[count].style.backgroundColor = "blue";
    steps[count].style.color = "white";
    if (count > 0) {
      lines[count - 1].style.background = "blue";
    }
    description.innerHTML = para_list[count];
    previous.disabled = false;
    if (count === steps.length - 1) {
      next.disabled = true;
    }
  }
});

previous.addEventListener("click", function () {
  if (count > 0) {
    steps[count].style.backgroundColor = " rgba(180, 172, 172, 0.299)";
    steps[count].style.color = "black";
    if (count > 0) {
      lines[count - 1].style.background = "black";
    }
    count--;
    description.innerHTML = para_list[count];
    next.disabled = false;
    if (count === 0) {
      previous.disabled = true;
    }
  }
});

previous.disabled = true;
description.innerHTML = para_list[0];
