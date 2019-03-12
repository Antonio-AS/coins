import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinFormComponent } from './coin-form/coin-form.component';
import { CoinsComponent } from './coins/coins.component';
import { coinReducer } from './coin.redurer';

@NgModule({
  declarations: [
    AppComponent,
    CoinFormComponent,
    CoinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      StoreModule.forRoot({ coins: coinReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
