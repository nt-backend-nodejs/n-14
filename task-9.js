class ShoppingCart {
  items = [];
  addItem(item) {
    this.items.push(item);
  }FFFFFF
  removeItem(name) {
    const newItems = this.items.filter((item) => item.name != name);
    this.items = newItems
  }

  logAll(){
    console.log(this.items)
  }
  getTotalPrice() {}
}

const cart = new ShoppingCart();

cart.addItem({
  name: "olma",
  price: 120,
});

cart.addItem({
  name: "uzum",
  price: 20,
});

cart.addItem({
  name: "anor",
  price: 20,
});
cart.logAll()

cart.removeItem("anor")
cart.logAll()