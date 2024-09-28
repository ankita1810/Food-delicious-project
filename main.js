function getMenu() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        console.log(item.name + " - " + item.price);
        // You can display the items on the webpage using DOM manipulation
      });
    })
    .catch((error) => console.error("Error fetching menu:", error));
}

// Function to simulate taking an order after a delay
function TakeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const burgers = ["Cheeseburger", "Veggie Burger", "Chicken Burger"];
      const order = [];
      for (let i = 0; i < 3; i++) {
        const randomBurger =
          burgers[Math.floor(Math.random() * burgers.length)];
        order.push(randomBurger);
      }
      resolve(order);
    }, 2500);
  });
}

// Example usage:
getMenu(); // Call getMenu() when the page loads

TakeOrder().then((order) => {
  console.log("Order received:", order);
  // You can further process the order here, like sending it to the chef
});

// Function to simulate order preparation
function orderPrep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

// Function to simulate payment of order
function payOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

// Function to display a thank you message after payment
function thankyouFnc() {
  alert("Thank you for eating with us today!");
}

// Handling promises sequentially using async/await
async function orderFood() {
  try {
    getMenu();
    const order = await takeOrder();
    console.log("Order Placed:", order);
    const prepStatus = await orderPrep();
    console.log("Order Prepared:", prepStatus);
    const paymentStatus = await payOrder();
    console.log("Payment Status:", paymentStatus);
    thankyouFnc();
  } catch (error) {
    console.error("Error:", error);
  }
}
orderFood();
