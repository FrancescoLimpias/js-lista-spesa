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

    // To store index in the cycle block
    const scopeIndex = i;

    // Create full itemElement
    const itemElement = document.createElement("li");
    
    // Create spanItem
    const spanItem = document.createElement("span");
    spanItem.innerHTML = shopList[i];

    // Link delete button
    const buttonDel = document.createElement("button");
    buttonDel.innerHTML = "elimina";
    buttonDel.classList.add("button-delete");
    buttonDel.addEventListener("click", function(){

        // Delete itemElement from shopping list
        shoppingListElement.removeChild(itemElement);

        // Delete item from shopList
        shopList.splice(scopeIndex, 1);

    });

    // Build itemElement
    itemElement.append(spanItem);
    itemElement.append(buttonDel);

    // Add to shopping list
    shoppingListElement.append(itemElement);

    i++;
}

// AddItem logic
inputAddItem.addEventListener("click", function () {

    // Fetch and validate item
    const item = inputItem.value;
    if (item != "") {

        // To store index in the cycle block
        const itemIndex = shopList.length;

        // Store item
        shopList.push(item);
    
        // Create full itemElement
        const itemElement = document.createElement("li");
        
        // Create spanItem
        const spanItem = document.createElement("span");
        spanItem.innerHTML = item;
    
        // Link delete button
        const buttonDel = document.createElement("button");
        buttonDel.innerHTML = "elimina";
        buttonDel.classList.add("button-delete");
        buttonDel.addEventListener("click", function(){
    
            // Delete itemElement from shopping list
            shoppingListElement.removeChild(itemElement);
    
            // Delete item from shopList
            shopList.splice(itemIndex, 1);
    
        });
    
        // Build itemElement
        itemElement.append(spanItem);
        itemElement.append(buttonDel);

        // Add to #shopping-list
        shoppingListElement.append(itemElement);

        // Clear #inputItem
        inputItem.value = "";

    }

});