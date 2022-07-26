const cart = document.querySelector('.cart__products');

const buttons = document.querySelectorAll('.product__add');

const controllersDecrement = document.querySelectorAll(
  '.product__quantity-control_dec'
);

const controllersIncrement = document.querySelectorAll(
  '.product__quantity-control_inc'
);

const decrease = (elem) => {
  const parent = elem.closest('.product');
  const innerValue = parent.querySelector('.product__quantity-value');
  let count = Number(innerValue.textContent);

  if (count === 1) {
    return;
  }
  count -= 1;
  innerValue.innerHTML = count;
};

const increase = (elem) => {
  const parent = elem.closest('.product');
  const innerValue = parent.querySelector('.product__quantity-value');
  let count = Number(innerValue.textContent);
  count += 1;
  innerValue.innerHTML = count;
};

const checkForProductInCart = (elem) => {
  const parent = elem.closest('.product');
  const productId = parent.dataset.id;
  const productCount = parent.querySelector('.product__quantity-value');

  const products = document.querySelectorAll('.cart__product');

  for (let product of Array.from(products)) {
    if (product.dataset.id === productId) {
      const count = product.querySelector('.cart__product-count');
      const currentValue = Number(count.innerHTML);
      const newValue = Number(productCount.innerHTML);

      count.innerHTML = currentValue + newValue;

      return;
    }
  }

  const productImg = parent.querySelector('.product__image');

  const cartProduct = document.createElement('div');
  cartProduct.classList.add('cart__product');
  cartProduct.setAttribute('data-id', productId);

  const cartImg = productImg.cloneNode(false);
  cartImg.classList.remove('product__image');
  cartImg.classList.add('cart__product-image');

  const cartCount = productCount.cloneNode(true);
  cartCount.classList.remove('product__quantity-value');
  cartCount.classList.add('cart__product-count');

  cartProduct.append(cartImg);
  cartProduct.append(cartCount);

  cart.append(cartProduct);
};

Array.from(buttons).forEach((element) => {
  element.addEventListener('click', () => checkForProductInCart(element));
});

Array.from(controllersDecrement).forEach((element) => {
  element.addEventListener('click', () => decrease(element));
});

Array.from(controllersIncrement).forEach((element) => {
  element.addEventListener('click', () => {
    increase(element);
  });
});
