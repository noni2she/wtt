import { productsDetailInitialState } from '../constants/initialState';
import {
  PROD_DETAIL_ON_CELL_EDIT,
  PROD_DETAIL_ON_DELETE_ROW,
  PROD_DETAIL_ON_ADD_ROW,
} from '../constants/actionTypes';

export default (state = productsDetailInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROD_DETAIL_ON_CELL_EDIT:
      let targetRowIndex, newState;
      const {
        categoryKey, seriesKey, uuid,
        cellName, cellValue
      } = payload;
      const seriesItems = state[categoryKey][seriesKey];

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
    default: 
      return state;
  }
}