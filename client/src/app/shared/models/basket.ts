import { v4 as uuidv4 } from 'uuid';

export interface IBasket {
    id: string;
    items: IBasketitem[];
    clientSecret?: string;
    paymentIntentId?: string;
    deliveryMethodId?: number;
    shippingPrice?: number;
}

export interface IBasketitem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export class Basket implements IBasket {
    id = uuidv4();
    items: IBasketitem[] = [];

}

export interface IBasketTotals {
    shipping: number;
    subtotal: number;
    total: number;
}



