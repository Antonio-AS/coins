import { Component, OnInit } from '@angular/core';

import { Coin } from '../coin';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coin-form',
  templateUrl: './coin-form.component.html',
  styleUrls: ['./coin-form.component.css']
})
export class CoinFormComponent implements OnInit {

  coin = new Coin();

  constructor(private coinService: CoinService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.coinService.add(this.coin);
    this.coin = new Coin();
  }
}
