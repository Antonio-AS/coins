import { ActionTypes, CoinActions } from './coin.actions';

export const initialState = [];

export function coinReducer(state = initialState, action: CoinActions) {
    switch (action.type) {
        case ActionTypes.Add:
            return [...state, action.payload];

        default:
            return state;
    }
}
