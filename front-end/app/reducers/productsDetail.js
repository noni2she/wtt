import { productsDetailInitialState } from 'constants/initialState';
import {
  PROD_DETAIL_ON_CELL_EDIT,
  PROD_DETAIL_ON_DELETE_ROW,
  PROD_DETAIL_ON_ADD_ROW,
  FETCH_FIREBASE_DATA_SUCCESS,
} from 'constants/actionTypes';

export default (state = productsDetailInitialState, action) => {

  /* get content of state and action
   * set payload to empty oject as default to prevent error when destrcturing
   */
  let { type, payload } = action;
  payload = payload || {};

  const {
    categoryKey, seriesKey, uuid,
    cellName, cellValue, rowsKey,
    row, productsDetail
  } = payload;

  // local variable
  let targetRowIndex, newState, seriesItems, result;

  switch (type) {
    case FETCH_FIREBASE_DATA_SUCCESS:
      return {
        ...productsDetail
      };
    case PROD_DETAIL_ON_CELL_EDIT:
      seriesItems = state[categoryKey][seriesKey];

      // get the index of row which was modify
      for(var index = 0 ; index < seriesItems.length ;index++) {
        if (uuid === seriesItems[index].uuid ) {
          targetRowIndex = index;
          break;
        }
      }

      // create a new object for state
      newState = {
        ...state,
      };
      // take Array for seriesItems
      newState[categoryKey][seriesKey] = [
        ...newState[categoryKey][seriesKey]
      ];
      newState[categoryKey][seriesKey][targetRowIndex] = {
        ...newState[categoryKey][seriesKey][targetRowIndex],
        [cellName]: cellValue,
      };

      return newState;
    case PROD_DETAIL_ON_DELETE_ROW:
      seriesItems = state[categoryKey][seriesKey];

      // create a new object for state
      newState = {
        ...state,
      };

      // filter lagacy records
      newState[categoryKey][seriesKey] = seriesItems.filter((seriesItem) => {
        
        // preserve all seriesItem as default
        result = true;
        for(var index = 0 ; index < rowsKey.length ; index++) {
          if (seriesItem.uuid === rowsKey[index]) {
            result = false;
            delete rowsKey[index]; // prevent query key repeatly
            break;
          }
        }
        return result;
      });

      return newState;
    case PROD_DETAIL_ON_ADD_ROW:
      seriesItems = state[categoryKey][seriesKey];

      // create a new object for state
      newState = {
        ...state,
      };

      // take Array for seriesItems
      newState[categoryKey][seriesKey] = [
        ...newState[categoryKey][seriesKey]
      ];
      newState[categoryKey][seriesKey].push(row);

      return newState;
    default:
      return state;
  }
}