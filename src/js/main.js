const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');
let cart = [];

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}€`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalDisplay.textContent = `Total: ${total}€`;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const plant = button.parentElement;
        const name = plant.getAttribute('data-name');
        const price = parseFloat(plant.getAttribute('data-price'));
        cart.push({ name, price });
        updateCart();
    });
});
