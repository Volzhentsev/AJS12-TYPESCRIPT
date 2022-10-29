import Movie from '../domain/movie';
import Cart from '../service/cart';

test('add to cart', () => {
  const cart = new Cart();
  const act = new Movie(1, "Avengers", 99, 2012, "USA", "Avengers Assemble!", ["action", "fantasy", "adventure"], 137 );
  cart.add(act);
  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toEqual({
    id: 1,
    name: "Avengers",
    price: 99,
    year: 2012,
    country: "USA",
    slogan: "Avengers Assemble!",
    genre: ["action", "fantasy", "adventure"],
    duration: 137
  });  
})



