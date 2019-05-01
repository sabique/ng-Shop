import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    itemsMap: ShoppingCartItem[] = [];
    constructor(public items: { [productId:string]: ShoppingCartItem }) {
        for(let productId in items) {
            let item = items[productId];
            this.itemsMap.push(new ShoppingCartItem(item.quantity, item.product));
        }
    }

    get totalPrice() {
        let sum = 0;
        for(let productId in this.itemsMap) {
            sum += this.itemsMap[productId].totalPrice;
        }

        return sum;
    }

    get totalItemsCount() {
        let count = 0;
        for (let productKey in this.items) {
            count += this.items[productKey].quantity;
        }

        return count;
    }
}
