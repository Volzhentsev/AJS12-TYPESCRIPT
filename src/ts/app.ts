import Cart from './service/cart';
import Book from './domain/book';


const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));


console.log(cart.items);