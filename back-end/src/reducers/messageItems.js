import { MESSAGE_ITEMS_ON_DELETE } from 'constants/actionTypes';
import { messageItemsInitialState } from 'constants/initialState';

export default (state = messageItemsInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MESSAGE_ITEMS_ON_DELETE:
      const { rowsKey } = payload;
      let result;
      let newState = [
        ...state,
      ];

      // filter lagacy records
      newState = newState.filter((messageItem) => {

        // preserve all messageItem as default
        result = true;
        for(var index = 0 ; index < rowsKey.length ; index++) {
          if (messageItem.id === rowsKey[index]) {
            result = false;
            delete rowsKey[index]; // prevent query key repeatly
            break;
          }
        }
        return result;

      });
      return newState;
    default: 
      return state;
  }
}
