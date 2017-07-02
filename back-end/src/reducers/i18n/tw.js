import { twInitialState } from 'constants/initialState';

export default (state = twInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default: 
      return state;
  }
}