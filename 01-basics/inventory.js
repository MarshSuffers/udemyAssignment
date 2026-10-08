"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item1 = {
    name: "notebook",
    price: 5,
    inStock: true,
};
const item2 = {
    name: "pencil",
    price: 1,
    inStock: true,
};
const item3 = {
    name: "eraser",
    price: 2,
    inStock: false,
};
const productList = [item1, item2, item3];
//Prints inventory list to console and returns void
function list() {
    console.log(productList);
}
//filters and returns only availible products
function listAvailible() {
    const availible = productList.filter((product) => product.inStock === true);
    console.log(availible);
}
//calculates and returns value of all products
function listValue() {
    let total = 0;
    for (let index = 0; index < productList.length; index++) {
        const itemPrice = productList[index].price;
        total = total + itemPrice;
    }
    console.log(total);
}
list();
listAvailible();
listValue();
//# sourceMappingURL=inventory.js.map