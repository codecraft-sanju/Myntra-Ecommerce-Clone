const searchInput = document.querySelector('.search_input');
const itemsContainer = document.querySelector('.items-container');

function renderItems(itemsToRender) {
    itemsContainer.innerHTML = '';
    itemsToRender.forEach(item => {
        
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        
        itemCard.innerHTML =  `<div class="item-container">
        <img class="item-image" src="${item.image}" alt="">
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
         <img class="heartImage" src="./images/heart.jpg" alt="heart image" onclick="addToWishlist(${item.id})" />
        
         </div>
    </div>`;
        itemsContainer.appendChild(itemCard);
    });
}

renderItems(items);


searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase(); 
    const filteredItems = items.filter(item =>
        item.item_name.toLowerCase().includes(query) ||
        item.company.toLowerCase().includes(query)
    );
    renderItems(filteredItems); 
});
