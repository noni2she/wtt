
import { localesInitialState } from '../constants/initialState';

export default (state = localesInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default: 
      return state;
  }
}