// Create references
const shoppingListElement = document.getElementById("shopping-list");

// Declare shopping list
const shopList = [
    "Pane",
    "Latte",
    "Cereali",
    "Nutella",
    "Pizza",
    "Gelato",
];

// Write list
for (let i = 0; i < shopList.length; i++) {

    const item = document.createElement("div");
    item.innerHTML = shopList[i];
    shoppingListElement.append(item);

}