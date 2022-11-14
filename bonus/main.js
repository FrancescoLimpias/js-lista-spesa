// Create references
const shoppingListElement = document.getElementById("shopping-list");
const inputItem = document.getElementById("input-item");
const inputAddItem = document.getElementById("input-add-item");

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
/* for (let i = 0; i < shopList.length; i++) {

    const item = document.createElement("div");
    item.innerHTML = shopList[i];
    shoppingListElement.append(item);

} */
let i = 0;
while (i < shopList.length) {

    const itemElement = document.createElement("div");
    itemElement.innerHTML = shopList[i];
    shoppingListElement.append(itemElement);

    i++;
}

// AddItem logic
inputAddItem.addEventListener("click", function () {

    // Fetch and validate item
    const item = inputItem.value;
    if (item != "") {

        // Store item
        shopList.push(item);

        // Add to #shopping-list
        const itemElement = document.createElement("div");
        itemElement.innerHTML = item;
        shoppingListElement.append(itemElement);

        // Clear #inputItem
        inputItem.value = "";
        
    }

});