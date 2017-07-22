import { messageItemsInitialState } from 'constants/initialState';

export default (state = messageItemsInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default: 
      return state;
  }
}
