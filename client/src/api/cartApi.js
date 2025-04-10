
const CART_KEY = 'cart';

export const getUserCart = () => {
    const localCart = localStorage.getItem(CART_KEY);
    return localCart ? JSON.parse(localCart) : [];
};


export const addItemToCart = (itemId) => {

    const cart = getUserCart();

    const alreadyInCart = cart.some(id => id === itemId);

    if(alreadyInCart) {
        return {message: 'Item is already in your cart!'}
    };

    const cartUpdate = [...cart, itemId];

    localStorage.setItem(CART_KEY, JSON.stringify(cartUpdate));

    return {message: 'Item added to your cart! :)'}

    
};

export const removeItemFromCart = (itemId) => {
    const cartUpdate = getUserCart().filter(id => id !== itemId);
    localStorage.setItem(CART_KEY, JSON.stringify(cartUpdate));
};

export const clearCartStorageOnLogout = () => {
    localStorage.removeItem(CART_KEY);
}