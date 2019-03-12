import { Action } from '@ngrx/store';
import {Coin} from './coin';

export enum ActionTypes {
    Add = '[Coin] Add'
}

export class Add implements Action {
    readonly type = ActionTypes.Add;
    constructor(public payload: Coin){}
}

export type CoinActions = Add;
