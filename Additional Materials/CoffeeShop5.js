class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrder(dishName) {
    const newMenu = this.menu.map((item) => item.name);

    if (newMenu.includes(dishName)) {
      this.orders.push(dishName);
      return "The specified order has been added";
    } else {
      return "This item is currently unavailable!";
    }
  }

  fulfillOrder() {
    if (this.orders.length !== 0) {
      const regularOrder = this.orders.shift();
      return `The ${regularOrder} is ready!`;
    } else {
      return "All orders have been fulfilled!";
    }
  }

  listOrders() {
    return this.orders;
  }

  dueAmount() {
    const amount = this.orders.reduce((sum, item1) => {
      this.menu.forEach((quantity) => {
        if (quantity.name === item1) {
          sum += quantity.price;
        }
      });

      return sum;
    }, 0);

    return amount;
  }

  cheapestItem() {
    let cheapest = this.menu[0];

    this.menu.forEach(
      (elem) => (cheapest = cheapest.price > elem.price ? elem : cheapest)
    );

    return cheapest.name;
  }

  drinksOnly() {
    return this.menu
      .filter((elem1) => elem1.type === "drink")
      .map((elem1) => elem1.name);
  }

  foodOnly() {
    return this.menu
      .filter((elem2) => elem2.type === "food")
      .map((elem2) => elem2.name);
  }
}
// IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

let menu = [
  {
    name: "Jack Daniel's",
    type: "drink",
    price: 14800,
  },
  {
    name: "peperoni",
    type: "food",
    price: 1250,
  },
  {
    name: "kebab",
    type: "food",
    price: 950,
  },
  {
    name: "coffee",
    type: "drink",
    price: 300,
  },
];

const myWinery = new CoffeeShop("MyWinery", menu);

myWinery.addOrder("Pizza");
myWinery.addOrder("kebab");
myWinery.addOrder("coffee");

console.log(myWinery.listOrders()); // [ 'kebab', 'coffee' ]
console.log(myWinery.dueAmount()); // 950(kebab) + 300(coffee) = 1250

myWinery.fulfillOrder();
myWinery.fulfillOrder();
myWinery.addOrder("fries");
myWinery.fulfillOrder();

console.log(myWinery.listOrders()); // [] -> an empty array is returned if all orders have been exhausted
console.log(myWinery.dueAmount()); // 0 ->  no new orders taken, expect a zero payable
console.log(myWinery.cheapestItem()); // coffee -> 300
console.log(myWinery.drinksOnly()); // [ "Jack Daniel's", 'coffee' ] -> "DRINK"
console.log(myWinery.foodOnly()); // [ 'peperoni', 'kebab' ] -> "FOOD"
