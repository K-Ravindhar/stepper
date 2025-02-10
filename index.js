let steps = document.querySelectorAll(".numbers");
let lines = document.querySelectorAll(".line");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let para_list = [
  "Add contact details for further communication.",
  "Add Shipping address for successful delivery.",
  "Complete payment to complete the order.",
  "Ready to get delivered!",
  "Order Delivered successfully"
];
let description = document.getElementById("description");
let count = 0;

next.addEventListener("click", function () {
  if (count < steps.length - 1) {
    steps[count].innerHTML = "&#10003";
    steps[count].style.backgroundColor = "green";
    count++;
    steps[count].style.backgroundColor = "blue";
    steps[count].style.color = "white";
    if (count <= steps.length - 1) {
      lines[count - 1].style.background = "green";
    }
    description.innerHTML = para_list[count];
    previous.disabled = false;
    if(count === steps.length - 1){
      next.innerHTML = "Finish";
    }
  } else if(count === steps.length - 1){
      steps[count].innerHTML = "&#10003";
      steps[count].style.backgroundColor = "green";
      description.innerHTML = para_list[count+1];
      next.disabled = true;
  }
  console.log(count);
});

previous.addEventListener("click", function () {
  if (count > 0) {
    steps[count].style.backgroundColor = " rgba(180, 172, 172, 0.299)";
    steps[count].style.color = "black";
    if (count > 0) {
      lines[count - 1].style.background = "black";
    }
    count--;
    steps[count].style.backgroundColor = "blue";
    steps[count].innerHTML = count + 1;
    steps[count].style.color = "white";
    description.innerHTML = para_list[count];
    next.disabled = false;
    if (count === 0) {
      previous.disabled = true;
    }
    if(count !== steps.length - 1){
      next.innerHTML = "Next";
    }
  }
});
