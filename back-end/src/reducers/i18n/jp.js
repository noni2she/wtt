/* eslint no-unused-vars: 0 */
import { jpInitialState } from 'constants/initialState';

// action type what we receive
import {
  ON_JP_TOP_BANNER_EDIT, ON_JP_NEWS_EDIT, ON_JP_ABOUT_EDIT,
  ON_JP_CONTACT_EDIT, ON_JP_DOWNLOAD_EDIT, ON_JP_PRODUCTS_EDIT,
  ON_JP_NEWS_HEADER_EDIT, ON_JP_CONTACT_HEADER_EDIT, ON_JP_DOWNLOAD_HEADER_EDIT,
  ON_JP_PRODUCTS_HEADER_EDIT,
} from 'constants/actionTypes';

// attribute name
import {
  ATTRI_NAME_TOP_BANNER, ATTRI_NAME_NEWS, ATTRI_NAME_ABOUT,
  ATTRI_NAME_CONTACT, ATTRI_NAME_DOWNLOAD, ATTRI_NAME_PRODUCTS,
} from 'constants/common';

export default (state = jpInitialState, action) => {
  const { type, payload } = action;
  let newState;

  switch (type) {
    case ON_JP_PRODUCTS_EDIT:

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
    case ON_JP_NEWS_HEADER_EDIT:
      newState = {
        ...state
      };
      newState[ATTRI_NAME_NEWS] = {
        ...newState[ATTRI_NAME_NEWS],
        ...payload,
      };
      return newState;
    case ON_JP_CONTACT_HEADER_EDIT:
      newState = {
        ...state
      };
      newState[ATTRI_NAME_CONTACT] = {
        ...newState[ATTRI_NAME_CONTACT],
        ...payload,
      };
      return newState;
    case ON_JP_DOWNLOAD_HEADER_EDIT:
      newState = {
        ...state
      };
      newState[ATTRI_NAME_DOWNLOAD] = {
        ...newState[ATTRI_NAME_DOWNLOAD],
        ...payload,
      };
      return newState;
    case ON_JP_PRODUCTS_HEADER_EDIT:
      newState = {
        ...state
      };
      newState[ATTRI_NAME_PRODUCTS] = {
        ...newState[ATTRI_NAME_PRODUCTS],
        ...payload,
      };
      return newState;
    default:
      return state;
  }
}