import { productsDetailInitialState } from '../constants/initialState';

export default (state = productsDetailInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default: 
      return state;
  }
}