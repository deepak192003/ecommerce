function addToCart(productId, productName, productPrice, productImg, productQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        img: productImg,
        quantity: productQuantity
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item has been successfully added to the cart');
    updatePrice();
}

// Find all "Add to Cart" buttons on the page
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add a click event listener to each "Add to Cart" button
addToCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const productId = event.target.getAttribute('data-product-id');
        const productName = event.target.getAttribute('data-product-name');
        const productImg = event.target.getAttribute('data-product-img');
        const productPrice = parseFloat(event.target.getAttribute('data-product-price'));
        const productQuantity = parseInt(event.target.getAttribute('data-product-quantity'));

        addToCart(productId, productName, productPrice, productImg, productQuantity);
    });
});