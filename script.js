let product = document.querySelector(".dyn-product");

function showitem(value) {
  product.innerHTML = `
        <div class="prdouctImg">
            <!-- Add content for product image -->
        </div>
        <div class="productPrice">
            <img src="${value}.jpg" alt="${value}">
        </div>
        <div class="deliveryEsteem">
            <!-- Add content for delivery esteem -->
        </div>
        <div class="buyNow">
            <button id="buyBtn"><h4>BUY NOW</h4></button>
        </div>
        <div class="AddToCart">
            <button id="cartBtn"><h4>ADD TO CART</h4></button>
        </div>`;

  // console.log(value); // Logging the value variable
}
