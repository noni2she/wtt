/* eslint no-unused-vars: 0 */
import { enInitialState } from 'constants/initialState';

// action type what we receive
import {
  ON_EN_TOP_BANNER_EDIT, ON_EN_NEWS_EDIT, ON_EN_ABOUT_EDIT,
  ON_EN_CONTACT_EDIT, ON_EN_DOWNLOAD_EDIT, ON_EN_PRODUCTS_EDIT,
  ON_EN_NEWS_HEADER_EDIT, ON_EN_CONTACT_HEADER_EDIT, ON_EN_DOWNLOAD_HEADER_EDIT,
  ON_EN_PRODUCTS_HEADER_EDIT, ON_EN_PRODUCTS_CATEGORY_EDIT, ON_EN_NEWS_ITEM_EDIT,
  ON_EN_DOWNLOAD_ITEM_EDIT, ON_EN_NEWS_ITEM_CREATE, ON_EN_DOWNLOAD_ITEM_CREATE,
  ON_EN_PRODUCTS_SERIES_CREATE, ON_EN_PRODUCTS_CATEGORY_CREATE, ON_EN_NEWS_ITEM_DELETE,
  ON_EN_DOWNLOAD_ITEM_DELETE, ON_EN_PRODUCTS_CATEGORY_DELETE, ON_EN_PRODUCTS_SERIES_DELETE,
  FETCH_FIREBASE_DATA_SUCCESS,
} from 'constants/actionTypes';

// attribute name
import {
  ATTRI_NAME_TOP_BANNER, ATTRI_NAME_NEWS, ATTRI_NAME_ABOUT,
  ATTRI_NAME_CONTACT, ATTRI_NAME_DOWNLOAD, ATTRI_NAME_PRODUCTS,
} from 'constants/common';

import {
  newsItemDefaultGenerator,
  downloadItemDefaultGenerator,
  seriesDefaultGenerator,
  categoryDefaultGenerator,
} from 'constants/initialState';

export default (state = enInitialState, action) => {
  let { type, payload } = action;
  let newState, series;

  payload = payload || {};

  let {
    categoryItemsIndex, seriesItemsIndex, products,
    categoryIndex, newsItemIndex, downloadItemIndex,
    key, en,
  } = payload;

  switch (type) {
    case FETCH_FIREBASE_DATA_SUCCESS:
      return {
        ...en
      };
    // details of porduct
    case ON_EN_PRODUCTS_EDIT:
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
    // category info
    case ON_EN_PRODUCTS_CATEGORY_EDIT:
      delete payload.categoryIndex;

      newState = {
        ...state
      };

      newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryIndex] = {
        ...newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryIndex],
        ...payload,
      };
      return newState;
    // top banner
    case ON_EN_TOP_BANNER_EDIT:
      newState = {
        ...state
      };
      // remove empty imgUrl
      newState[ATTRI_NAME_TOP_BANNER].imgItems = payload.imgItems.filter((value) => {
        return value.imgUrl;
      });
      return newState;
    // news item
    case ON_EN_NEWS_ITEM_EDIT:
      delete payload.newsItemIndex;

      newState = {
        ...state
      };

      newState[ATTRI_NAME_NEWS].newsItems[newsItemIndex] = {
        ...newState[ATTRI_NAME_NEWS].newsItems[newsItemIndex],
        ...payload,
      };
      return newState;
    // contact
    case ON_EN_CONTACT_EDIT:
      newState = {
        ...state
      };
      newState[ATTRI_NAME_CONTACT] = {
        ...newState[ATTRI_NAME_CONTACT],
        ...payload,
      }
      return newState;
    // download items
    case ON_EN_DOWNLOAD_ITEM_EDIT:
      delete payload.downloadItemIndex;

      newState = {
        ...state
      };
      newState[ATTRI_NAME_DOWNLOAD].downloadItems[downloadItemIndex] = {
        ...newState[ATTRI_NAME_DOWNLOAD].downloadItems[downloadItemIndex],
        ...payload,
      };

      return newState;
    /* create */
    // newsItem
    case ON_EN_NEWS_ITEM_CREATE:
      const createNewsItems = newsItemDefaultGenerator();
      newState = {
        ...state
      };
      newState[ATTRI_NAME_NEWS] = {
        ...newState[ATTRI_NAME_NEWS],
      }
      newState[ATTRI_NAME_NEWS].newsItems = [
        createNewsItems,
        ...newState[ATTRI_NAME_NEWS].newsItems,
      ];

      return newState;
    // downloadItem
    case ON_EN_DOWNLOAD_ITEM_CREATE:
      const createDownloadItems = downloadItemDefaultGenerator();

      newState = {
        ...state
      };

      newState[ATTRI_NAME_DOWNLOAD] = {
        ...newState[ATTRI_NAME_DOWNLOAD],
      }
      newState[ATTRI_NAME_DOWNLOAD].downloadItems = [
        createDownloadItems,
        ...newState[ATTRI_NAME_DOWNLOAD].downloadItems,
      ];

      return newState;
    // series
    case ON_EN_PRODUCTS_SERIES_CREATE:
      const createSeries = {
        ...seriesDefaultGenerator(),
        key,
      };

      newState = {
        ...state
      };
      newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryIndex] = {
        ...newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryIndex],
      }
      newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryIndex].seriesItems = [
        ...newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryIndex].seriesItems,
      ];
      newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryIndex].seriesItems.push(createSeries);

      return newState;
    // category
    case ON_EN_PRODUCTS_CATEGORY_CREATE:
      const createCategory = {
        ...categoryDefaultGenerator(),
        key,
      };
      newState = {
        ...state
      };
      newState[ATTRI_NAME_PRODUCTS].categoryItems = [
        ...newState[ATTRI_NAME_PRODUCTS].categoryItems,
      ];
      newState[ATTRI_NAME_PRODUCTS].categoryItems.push(createCategory);

      return newState;
    // delete
    case ON_EN_NEWS_ITEM_DELETE:
      newsItemIndex = parseInt(newsItemIndex, 10);
      newState = {
        ...state
      };
      newState[ATTRI_NAME_NEWS] = {
        ...newState[ATTRI_NAME_NEWS],
      }

      newState[ATTRI_NAME_NEWS].newsItems = newState[ATTRI_NAME_NEWS].newsItems.filter((item, index) => {
        return index !== newsItemIndex;
      });

      return newState;
    case ON_EN_DOWNLOAD_ITEM_DELETE:
      downloadItemIndex = parseInt(downloadItemIndex, 10);
      newState = {
        ...state
      };
      newState[ATTRI_NAME_DOWNLOAD] = {
        ...newState[ATTRI_NAME_DOWNLOAD],
      }

      newState[ATTRI_NAME_DOWNLOAD].downloadItems = newState[ATTRI_NAME_DOWNLOAD].downloadItems.filter((item, index) => {
        return index !== downloadItemIndex;
      });

      return newState;
    case ON_EN_PRODUCTS_CATEGORY_DELETE:
      categoryIndex = parseInt(categoryIndex, 10);
      newState = {
        ...state
      };
      newState[ATTRI_NAME_PRODUCTS] = {
        ...newState[ATTRI_NAME_PRODUCTS],
      }

      newState[ATTRI_NAME_PRODUCTS].categoryItems = newState[ATTRI_NAME_PRODUCTS].categoryItems.filter((item, index) => {
        return index !== categoryIndex;
      });

      return newState;
    case ON_EN_PRODUCTS_SERIES_DELETE:
      categoryItemsIndex = parseInt(categoryItemsIndex, 10);
      seriesItemsIndex = parseInt(seriesItemsIndex, 10);

      newState = {
        ...state
      };
      newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryItemsIndex] = {
        ...newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryItemsIndex],
      }

      newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryItemsIndex].seriesItems =
        newState[ATTRI_NAME_PRODUCTS].categoryItems[categoryItemsIndex].seriesItems.filter((item, index) => {
          return index !== seriesItemsIndex;
        });

      return newState;
    default:
      return state;
  }
}
