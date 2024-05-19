let elem = document.getElementById("my-elem");
let addNum = document.querySelector(".addNum");

let num = 0; // Initialize the counter to 0
addNum.textContent = "No of Clicks: 0";
elem.addEventListener("click", function () {
  num = num + 1; // Increment the counter by 1 on each click

  // Update the content of addNum element with the updated count
  addNum.textContent = "No of Clicks: " + num;
});
