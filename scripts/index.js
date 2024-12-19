let bagItems = [];
let wishListItems = [];

oldLoad();
function oldLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    let bagWishListStr = localStorage.getItem('wishListItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    wishListItems = bagWishListStr ? JSON.parse(bagWishListStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
    displaywishlistIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function addToWishlist(itemId, e) {
    const heartIcon = e.target; 
    
    
    if (heartIcon.classList.contains('fa-regular')) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
    } else {
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
    }

    
    if (!wishListItems.includes(itemId)) {
        wishListItems.push(itemId);
    } else {
        
        wishListItems = wishListItems.filter(item => item !== itemId);
    }

    
    localStorage.setItem('wishListItems', JSON.stringify(wishListItems));

    
    displaywishlistIcon();
}


function displaywishlistIcon() {
    let wishlistCountElement = document.querySelector('.bag-wishlist-count');
    if (wishListItems.length > 0) {
        wishlistCountElement.style.visibility = 'visible';
        wishlistCountElement.innerHTML = wishListItems.length;
    } else {
        wishlistCountElement.style.visibility = 'hidden';
    }
}

function displayBagIcon() {
    let bagItemsCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
         bagItemsCountElement.style.visibility= 'visible';
        bagItemsCountElement.innerHTML = bagItems.length;
    } else {
        bagItemsCountElement.style.visibility= 'hidden';
    }
}

function displayItemsOnHomePage() {

    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement) {
        return;
  }
    let innerHTML = '';

    items.forEach(item => {
        innerHTML += `<div class="item-container">
       <img class="item-image" src='${item.image}' alt="">
        <div class="rating">
            ${item.rating.stars} 🌟 | ${item.rating.count}
        </div>
        <div class="company-name">
        ${item.company}
        </div>
        <div class="item-name">
            ${item.item_name}
        </div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <div class="End">
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        <i onclick="addToWishlist(${item.id},event)" class="fa-regular dil fa-heart"></i>
         </div>
    </div>`
    });

    itemsContainerElement.innerHTML = innerHTML;

}

