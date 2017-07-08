import {
  ON_LOCALE_SWITCH_TO_TW,
  ON_LOCALE_SWITCH_TO_JP,
  ON_LOCALE_SWITCH_TO_EN,
  USELESS_ACTION,
} from 'constants/actionTypes';

import {
  LOCALE_TW, LOCALE_JP, LOCALE_EN,
} from 'constants/common';

export const onLocaleChange = (value) => {
  switch(value) {
    case LOCALE_TW:
      return({
        type: ON_LOCALE_SWITCH_TO_TW,
        payload: value,
      });
    case LOCALE_JP:
      return({
        type: ON_LOCALE_SWITCH_TO_JP,
        payload: value,
      });
    case LOCALE_EN:
      return({
        type: ON_LOCALE_SWITCH_TO_EN,
        payload: value,
      });
    default:
      return ({
        type: USELESS_ACTION,
        payload: value,
      });
  }
}
