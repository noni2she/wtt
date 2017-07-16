import {
  PROD_DETAIL_ON_CELL_EDIT,
  PROD_DETAIL_ON_DELETE_ROW,
  PROD_DETAIL_ON_ADD_ROW,
  PROD_DETAIL_ON_CATEGORY_CREATE,
} from 'constants/actionTypes';

export const onCellEdit = (value) => {
  return ({
    type: PROD_DETAIL_ON_CELL_EDIT,
    payload: value,
  });
}
export const onDeleteRow = (value) => {
  
  return ({
    type: PROD_DETAIL_ON_DELETE_ROW,
    payload: value,
  });
}

export const onAddRow = (value) => {
  return ({
    type: PROD_DETAIL_ON_ADD_ROW,
    payload: value,
  });
}

export const onNewCategoryCreate = (value) => {
  return ({
    type: PROD_DETAIL_ON_CATEGORY_CREATE,
    payload: value,
  });
}
