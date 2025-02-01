// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');
   
        for (let category in menu) {
            let categoryElement = document.createElement('h2');
            categoryElement.textContent = category;
            menuContainer.appendChild(categoryElement);


            let itemsList = document.createElement('ul');
            menuContainer.appendChild(itemsList);

            for (let item of menu[category]) {
                let listItem = document.createElement('li');
                listItem.textContent = item;
                listItem.addEventListener('click', () => addToOrder(item));
                itemsList.appendChild(listItem);
            }
    
        }
 
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
   
    let orderItem = document.createElement('li');
    orderItem.textContent = itemName;
    orderList.appendChild(orderItem);

    let currentTotal = parseFloat(orderTotalElement.textContent) || 0; 
    let newTotal = currentTotal + 60.00;
    orderTotalElement.textContent = newTotal.toFixed(2);

}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
    // Call the function to display menu items
}

// Start the menu system by calling the init function
document.addEventListener('DOMContentLoaded', (event) => {
    initMenuSystem(menu);
});
