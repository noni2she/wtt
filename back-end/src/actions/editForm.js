/* eslint no-unused-vars: 0 */

import {
  LOCALE_JP, LOCALE_EN,
  FORM_SET_SERIES_DETAIL, 
} from 'constants/common';

import {
  LOCALE_TW_PREFIX, LOCALE_JP_PREFIX ,LOCALE_EN_PREFIX,
  EDIT_FROM_CREATE, EDIT_FROM_EDIT, EDIT_FROM_DELETE,
  MAP_FORMSET_TO_ATTRI_TOP_BANNER, MAP_FORMSET_TO_ATTRI_NEWS, MAP_FORMSET_TO_ATTRI_ABOUT,
  MAP_FORMSET_TO_ATTRI_CONTACT, MAP_FORMSET_TO_ATTRI_DOWNLOAD, MAP_FORMSET_TO_ATTRI_PRODUCTS,
} from 'constants/actionTypes';


// helper of get prefix of locale
const getLocalePrefix = (locale) =>  {
  switch(locale) {
    case LOCALE_JP:
      return LOCALE_JP_PREFIX;
    case LOCALE_EN:
      return LOCALE_EN_PREFIX;
    default:
      return LOCALE_TW_PREFIX;
  }
};

const mapFormSetToAttriName = (formSet) => {
  switch(formSet) {
    case FORM_SET_SERIES_DETAIL:
      return MAP_FORMSET_TO_ATTRI_PRODUCTS;

    default:
      return '';
  }
};

/*
 * onEditFormSunmit 
 * @argc: all the following argus are required.
 *  locale: i18n 
 *  formSet: create different action by different form type
 *  value: the value 
 * 
 * @return: action object
 *  type: format depending on locales and formSet
 *   syntax: `${LOCALE_PREFIX}${FORMSET_CORRESPONING}${EDIT_FORM_BEHAVIOR}`
 *   for example: ON_TW_PRODUCTS_DETAIL_EDIT
 */
export const onEditFormSubmit = (locale, formSet, value) => {
  return({
    type: `ON_${getLocalePrefix(locale)}${mapFormSetToAttriName(formSet)}_${EDIT_FROM_EDIT}`,
    payload: value,
  });
};
