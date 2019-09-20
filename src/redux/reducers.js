import {QRARRAYSTORE} from './action/actionTypes';


const initialState = {
    qrArr: []
  };

const arrayReducer = (state = initialState ,action) => {
    switch(action.type){
        case QRARRAYSTORE:
             return Object.assign({},state,{
                 qrArr : [...state.qrArr,
                        action.payload ]                 
             });
        default:
            return state;     
    }
}

export {arrayReducer};