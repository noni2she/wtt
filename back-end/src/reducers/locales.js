import {
  ON_LOCALE_SWITCH_TO_TW,
  ON_LOCALE_SWITCH_TO_JP,
  ON_LOCALE_SWITCH_TO_EN,
} from 'constants/actionTypes';

import { localesInitialState } from 'constants/initialState';

export default (state = localesInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ON_LOCALE_SWITCH_TO_TW:
    case ON_LOCALE_SWITCH_TO_JP:
    case ON_LOCALE_SWITCH_TO_EN:
      return payload;
    default: 
      return state;
  }
}
