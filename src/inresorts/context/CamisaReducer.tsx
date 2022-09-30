import { Camisa } from '../interfaces';
import { CamisasState } from './';

type CamisasActionType = 
    | { type: 'add', payload: Camisa[] }
    | { type: 'loading' }

export const camisasReducer = ( state: CamisasState, action: CamisasActionType ) : CamisasState => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                isLoading: false,
                camisas: action.payload
            }
        case 'loading' : 
            return {
                ...state,
                isLoading: true
            }
        default:
           return state;
    }
}