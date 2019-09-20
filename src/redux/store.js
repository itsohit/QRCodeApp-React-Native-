import {arrayReducer} from './reducers'
import {createStore} from 'redux';
export const store = createStore(arrayReducer);
