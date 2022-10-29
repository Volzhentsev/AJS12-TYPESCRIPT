import Buyable from '../domain/buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
    getAmmount(): number {
        return this._items.reduce((total, current) => total += current.price, 0)
    }
    getAmmountWithDiscount(discount: number): number {
        return this.getAmmount() * (1 - discount / 100);
    }
    removeItemById(id: number): void {
        const index = this._items.findIndex(n => n.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }
}