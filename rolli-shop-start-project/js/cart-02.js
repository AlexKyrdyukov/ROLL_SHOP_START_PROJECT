const cartWrapper = document.querySelector('.cart-wrapper')
//отслеживаем клик на странице
window.addEventListener('click', (event) => {


   //проверяем что клик был совершен по кнопке   "добавить в корзину"
   if (event.target.hasAttribute('data-cart')) {



      //находим карточку с товаром, внутри которой произошел клик
      const cart = event.target.closest('.card')
      //собираем данные с выбранной карточки и записываем в объект
      const productItem = {
         id: cart.dataset.id,
         imgSrc: cart.querySelector('.product-img').getAttribute('src'),
         title: cart.querySelector('.item-title').innerText,
         itemsInBox: cart.querySelector('[data-items-in-box]').innerText,
         count: cart.querySelector('[data-counter]').innerText,
         weight: cart.querySelector('.price__weight').innerText,
         price: cart.querySelector('.price__currency').innerText,
      }
      //проверяем есть ли такой товар в корзине
      const itemInCart = cartWrapper.querySelector(`[data-id="${productItem.id}"]`)
      //если товар находится в корзине
      if (itemInCart) {
         const counterEl = itemInCart.querySelector('[data-counter]')
         counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productItem.count)
      } else {
         //если товара нет в корзине
         //отображение товара в корзине
         const innerInfoHTML = `
      <div class="cart-item" data-id="${productItem.id}">
      <div class="cart-item__top">
         <div class="cart-item__img">
            <img src="${productItem.imgSrc}" alt="${productItem.title}">
         </div>
         <div class="cart-item__desc">
            <div class="cart-item__title">${productItem.title}</div>
            <div class="cart-item__weight">${productItem.itemsInBox} / ${productItem.weight}</div>

            <!-- cart-item__details -->
            <div class="cart-item__details">

               <div class="items items--small counter-wrapper">
                  <div class="items__control" data-action="minus">-</div>
                  <div class="items__current" data-counter="">${productItem.count}</div>
                  <div class="items__control" data-action="plus">+</div>
               </div>

               <div class="price">
                  <div class="price__currency">${productItem.price}</div>
               </div>

            </div>
            <!-- // cart-item__details -->

         </div>
      </div>
   </div>
      `
         cartWrapper.insertAdjacentHTML('beforeend', innerInfoHTML);
      }
      //сбрасываем счетчик на единицу
      cart.querySelector('[data-counter]').innerText = '1'
      //отобраение статуса корзины пустая полная
      toggleCartStatus()

      //пересчет общей суммы товаров в корзине
      calcCartPriceAndDelivery()
   }
})
