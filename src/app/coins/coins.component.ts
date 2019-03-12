import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Coin } from '../coin';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins$: Observable<Coin[]>;

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coins$ = this.coinService.coins$;
  }
}
