import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketitem } from '../models/basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basket$: Observable<IBasket>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }
  removeBasketItem(item: IBasketitem) {
    this.basketService.removeItemFromBasket(item);
  }
  incrementItemQuantity(item: IBasketitem) {
    this.basketService.incrementItemQuantity(item);
  }
  decrementItemQuantity(item: IBasketitem) {
    this.basketService.decrementItemQuantity(item);
  }

}
