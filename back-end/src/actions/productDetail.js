import {
  PROD_DETAIL_ON_CELL_EDIT,
  PROD_DETAIL_ON_DELETE_ROW,
  PROD_DETAIL_ON_ADD_ROW,
  PROD_DETAIL_ON_CATEGORY_CREATE,
  PROD_DETAIL_ON_SERIES_CREATE,
  PROD_DETAIL_ON_CATEGORY_DELETE,
  PROD_DETAIL_ON_SERIES_DELETE,
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

export const onNewSeriesCreate = (value) => {
  return ({
    type: PROD_DETAIL_ON_SERIES_CREATE,
    payload: value,
  });
}

export const onCategoryDelete = (value) => {
  return ({
    type: PROD_DETAIL_ON_CATEGORY_DELETE,
    payload: value,
  });
}

export const onSeriesDelete = (value) => {
  return ({
    type: PROD_DETAIL_ON_SERIES_DELETE,
    payload: value,
  });
}
