import Cart from '../service/cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('method should return a correct sum', () => {
  const cart = new Cart();
  cart.add({ name: 'book', id: 1, price: 100 });
  cart.add({ name: 'book2', id: 2, price: 200 });
  cart.add({ name: 'book3', id: 3, price: 300 });
  expect(cart.getAmmount()).toBe(600);
});

test('method should return a right value with a discount value (in percent) passed', () => {
  const cart = new Cart();
  cart.add({ name: 'book', id: 1, price: 100 });
  cart.add({ name: 'book2', id: 2, price: 200 });
  cart.add({ name: 'book3', id: 3, price: 300 });
  expect(cart.getAmmountWithDiscount(10)).toBe(540);
});

test('remove from cart by id', () => {
  const cart = new Cart();
  cart.add({ name: 'book', id: 1, price: 100 });
  cart.add({ name: 'book2', id: 2, price: 200 });
  cart.add({ name: 'book3', id: 3, price: 300 });
  cart.removeItemById(3);
  expect(cart.items.length).toBe(2);   
})