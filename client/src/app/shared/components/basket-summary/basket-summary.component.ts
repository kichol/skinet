import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketitem } from '../../models/basket';
import { IOrderItem } from '../../models/order';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  @Output() decrement: EventEmitter<IBasketitem> = new EventEmitter<IBasketitem>();
  @Output() increment: EventEmitter<IBasketitem> = new EventEmitter<IBasketitem>();
  @Output() remove: EventEmitter<IBasketitem> = new EventEmitter<IBasketitem>();
  @Input() isBasket = true;
  @Input() items: IBasketitem[] | IOrderItem[] = [];
  @Input() isOrder = false;
  constructor() { }

  ngOnInit(): void {
  }

  decrementItemQuantity(item: IBasketitem) {
    this.decrement.emit(item);
  }
  incrementItemQuantity(item: IBasketitem) {
    this.increment.emit(item);
  }
  removeBasketItem(item: IBasketitem) {
    this.remove.emit(item);
  }
}
