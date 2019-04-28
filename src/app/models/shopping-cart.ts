import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    constructor(public items: ShoppingCartItem[]){}

    get productKeys() {
        return Object.keys(this.items);
    }

    get totalItemsCount() {
        let count = 0;
        for (let productKey in this.items) {
            count += this.items[productKey].quantity;
        }

        return count;
    }
}
