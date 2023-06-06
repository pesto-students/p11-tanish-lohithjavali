//MapsAndSetInEcommerce

let productViews = new WeakMap();
let cartItems = new WeakSet();
function incrementProductViews(productId){
    if(productViews.has(productId)){
        productViews.set(productId, productViews.get(productId)+1);
    }else{
        productViews.set(productId, 1);
    }
    console.log(productViews);
}

function addToCart(productId){
    if(cartItems.has(productId)){
        console.log("Product already in cart");
    }else{
        cartItems.add(productId)
        console.log("Product added to cart");
    }
}


incrementProductViews(123); // Product ID 123 is viewed for the first time
incrementProductViews(123); // Product ID 123 is viewed for the second time
addToCart(123); // "Product added to cart"
addToCart(123); // "Product already in cart"

// const  obj = {};
// incrementProductViews(obj);
// incrementProductViews(obj);
// addToCart(obj);
// addToCart(obj);