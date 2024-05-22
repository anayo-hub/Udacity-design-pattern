let cat1 = document.getElementById("cat1");
let cat2 = document.getElementById("cat2");

let one = document.getElementById("one");
let two = document.getElementById("two");

let addNum = document.querySelector(".addNum");

let num = 0; // Initialize the counter to 0
addNum.textContent = "No of Clicks: 0";

const cat1name = "cat1";
const cat2name = "cat2";

cat1.textContent = cat1name;
cat2.textContent = cat2name;

one.addEventListener("click", function () {
  num = num + 1; // Increment the counter by 1 on each click

  // Update the content of addNum element with the updated count
  addNum.textContent = "No of Clicks: " + num;
});

two.addEventListener("click", function () {
  num = num + 1; // Increment the counter by 1 on each click

  // Update the content of addNum element with the updated count
  addNum.textContent = "No of Clicks: " + num;
});

// let elem = document.getElementById("my-elem");
// let addNum = document.querySelector(".addNum");

// let num = 0; // Initialize the counter to 0
// addNum.textContent = "No of Clicks: 0";
// elem.addEventListener("click", function () {
//   num = num + 1; // Increment the counter by 1 on each click

//   // Update the content of addNum element with the updated count
//   addNum.textContent = "No of Clicks: " + num;
// });

// function addProductToCart(productId) {
//   // Check if the product is already in the cart
//   const existingProduct = cart.find(item => item.id === productId);

//   if (existingProduct) {
//     // If the product is already in the cart, increase the quantity
//     existingProduct.quantity++;
//   } else {
//     // If it's a new product, add it to the cart with a quantity of 1
//     const newProduct = {
//       id: productId,
//       quantity: 1
//     };
//     cart.push(newProduct);
//   }
// }

// // Example usage:
// const cart = [];

// addProductToCart(1); // Add product with ID 1 to the cart
// addProductToCart(2); // Add product with ID 2 to the cart
// addProductToCart(1); // Increase the quantity of product with ID 1 in the cart

// console.log(cart); // Output the cart to the console

