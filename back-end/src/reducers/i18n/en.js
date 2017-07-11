/* eslint no-unused-vars: 0 */
import { enInitialState } from 'constants/initialState';

// action type what we receive
import {
  ON_EN_TOP_BANNER_EDIT, ON_EN_NEWS_EDIT, ON_EN_ABOUT_EDIT,
  ON_EN_CONTACT_EDIT, ON_EN_DOWNLOAD_EDIT, ON_EN_PRODUCTS_EDIT,
  ON_EN_NEWS_HEADER_EDIT, ON_EN_CONTACT_HEADER_EDIT, ON_EN_DOWNLOAD_HEADER_EDIT,
  ON_EN_PRODUCTS_HEADER_EDIT,
} from 'constants/actionTypes';

// attribute name
import {
  ATTRI_NAME_TOP_BANNER, ATTRI_NAME_NEWS, ATTRI_NAME_ABOUT,
  ATTRI_NAME_CONTACT, ATTRI_NAME_DOWNLOAD, ATTRI_NAME_PRODUCTS,
} from 'constants/common';

export default (state = enInitialState, action) => {
  const { type, payload } = action;
  let newState;

  switch (type) {
    // details of porduct
    case ON_EN_PRODUCTS_EDIT:

      let {
        categoryItemsIndex, seriesItemsIndex, products,
      } = payload;

      // delete redundant index
      delete payload.categoryItemsIndex;
      delete payload.seriesItemsIndex;

      // 'products' represents the original object staying in old state.
      products = state[ATTRI_NAME_PRODUCTS].categoryItems[categoryItemsIndex].seriesItems[seriesItemsIndex];

      newState = {
        ...state
      };
      newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryItemsIndex].seriesItems[seriesItemsIndex] = {
        ...products,
        ...payload,
      }

      return newState;
    // header and subheader
    case ON_EN_NEWS_HEADER_EDIT:
      newState = {
        ...state
      };
      newState[ATTRI_NAME_NEWS] = {
        ...newState[ATTRI_NAME_NEWS],
        ...payload,
      };
      return newState;
    case ON_EN_CONTACT_HEADER_EDIT:
      newState = {
        ...state
      };
      newState[ATTRI_NAME_CONTACT] = {
        ...newState[ATTRI_NAME_CONTACT],
        ...payload,
      };
      return newState;
    case ON_EN_DOWNLOAD_HEADER_EDIT:
      newState = {
        ...state
      };
      newState[ATTRI_NAME_DOWNLOAD] = {
        ...newState[ATTRI_NAME_DOWNLOAD],
        ...payload,
      };
      return newState;
    case ON_EN_PRODUCTS_HEADER_EDIT:
      newState = {
        ...state
      };
      newState[ATTRI_NAME_PRODUCTS] = {
        ...newState[ATTRI_NAME_PRODUCTS],
        ...payload,
      };
      return newState;
    // about
    case ON_EN_ABOUT_EDIT:
      newState = {
        ...state
      };
      newState[ATTRI_NAME_ABOUT] = {
        ...newState[ATTRI_NAME_ABOUT],
        ...payload,
      };
      return newState;
    default:
      return state;
  }
}