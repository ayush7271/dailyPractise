// reducer.js
import { FETCH_DATA_SUCCESS } from './actions';

const initialState = {
  data: null,
};

const nbexPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default nbexPlanReducer;
