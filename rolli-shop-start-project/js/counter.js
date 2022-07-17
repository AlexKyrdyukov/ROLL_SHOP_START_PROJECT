//навешиваем событие на все окно
window.addEventListener('click', (event) => {
   //объявляем переменную соunt
   let count
   //проверяем был ли клик на кнопку плюс или минус
   if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
      //получаем родителя того блока в котором поизошел клик
      const counterWrapper = event.target.closest('.counter-wrapper')
      //получаем в переменную счетчик
      count = counterWrapper.querySelector('[data-counter]')
   }
   //проверяем был ли клик на кнопке плюс 
   if (event.target.dataset.action === 'plus') {
      //увеличиваем значение счетчика на 1
      count.innerText = ++count.innerText
   }
   //проверяем был ли клик на кнопке миинус
   if (event.target.dataset.action === 'minus') {
      //проверка на товар который начходится в корзине
      //приводим значение счетчика к number и значение должно быть больше единицы
      if (parseInt(count.innerText) > 1) {
         //уменьшаем значение счетчика на 1
         count.innerText = --count.innerText
         //проверяем был ли клик по кнопке минус в корзине и значение
         //счетчика равно 1
      } else if (event.target.closest('.cart-wrapper') && parseInt(count.innerText) === 1) {
         //удаляем карточку из корзины
         event.target.closest('.cart-item').remove()
         toggleCartStatus()
         calcCartPriceAndDelivery()
      }
   }
   //проверяем клик на + или - внутри корзины
   if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
      //выполняем функцию пересчета общей стоимости товара
      calcCartPriceAndDelivery()
   }
})
