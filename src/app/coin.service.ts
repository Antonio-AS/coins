import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Coin } from './coin';
import { Add } from './coin.actions';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  coins$: Observable<Coin[]>;

  constructor(private store: Store<Coin[]>) {
    this.coins$ = this.store.pipe(select('coins'));
  }

  add(coin: Coin): void {
    this.store.dispatch(new Add(coin));
  }
}
