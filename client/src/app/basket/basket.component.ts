import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketitem, IBasketTotals } from '../shared/models/basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IBasket>;
  basketTotals$: Observable<IBasketTotals>;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
    this.basketTotals$ = this.basketService.basketTotal$;
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
