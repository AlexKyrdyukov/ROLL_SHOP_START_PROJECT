function calcCartPriceAndDelivery() {
   const cartWrapper = document.querySelector('.cart-wrapper');
   const priceElements = cartWrapper.querySelectorAll('.price__currency');
   const totalPrice = document.querySelector('.total-price')
   const deliveryCost = document.querySelector('.delivery-cost')
   const cartDelivery = document.querySelector('[data-cart-delivery]')
   //общая стоимость товаров
   let sum = 0
   //Обходим все блоки с ценами в корзине
   priceElements.forEach(item => {
      //находим количество товара 
      const amonuntEl = item.closest('.cart-item').querySelector('[data-counter');
      //добавляемм стоимость товара в общую стоимость(количество умножаем на стоимомть и все суммируем)
      sum += parseInt(item.innerText) * parseInt(amonuntEl.innerText);
   });
   //отображаем цену на странице
   totalPrice.innerText = sum
   //скрываем /показываем блок со стоимостью доставки
   if (sum > 0) {
      cartDelivery.classList.remove('none')
   } else {
      cartDelivery.classList.add('none')
   }
   //указываем стоимость доставки
   if (sum >= 600) {
      deliveryCost.classList.add('free')
      deliveryCost.innerText = "бесплатно"
   } else {

      deliveryCost.classList.remove('free')
      deliveryCost.innerText = "250 ₽"
   }
}