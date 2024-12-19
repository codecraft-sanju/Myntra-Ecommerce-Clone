
let bagItemObjects;
onload();

function onload() {
     loadBagItemObjects();
    displayBagItems();
    
   
}
function loadBagItemObjects() {
    bagItemObjects = wishListItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}

function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    
    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
        innerHTML += generateItemHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
}

function removefrombag(itemId) {
    wishListItems = wishListItems.filter(bagItemId => bagItemId != itemId);  
    localStorage.setItem('wishListItems', JSON.stringify(wishListItems));    
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    

}

function generateItemHTML(item) {
    return `<div class="bag-item-container">
        <div class="item-left-part">
            <img class="bag-item-img" src="../${item.image}">
        </div>
        <div class="item-right-part">
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
            </div>
            <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
            </div>
            <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
            </div>
            <div class='btn'>
            <a href='../pages/bag.html' class="back">Move to bag</a>
            </div>
        </div>

        <div class="remove-from-cart" onclick="removefrombag(${item.id})">X</div>
    </div>`;
}

