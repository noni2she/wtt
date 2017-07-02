import {
  PROD_DETAIL_ON_CELL_EDIT,
  PROD_DETAIL_ON_DELETE_ROW,
  PROD_DETAIL_ON_ADD_ROW,
} from '../constants/actionTypes';

export const onCellEdit = (value) => {
  return ({
    type: PROD_DETAIL_ON_CELL_EDIT,
    payload: value,
  });
}
export const onDeleteRow = (value) => {

}
export const onAddRow = (value) => {

}
