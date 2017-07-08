// loginStatus
export const LOGIN_ON_AUTH = 'LOGIN_ON_AUTH';
export const LOGIN_AUTH_SUCCESS = 'LOGIN_AUTH_SUCCESS';
export const LOGIN_AUTH_FAILED = 'LOGIN_AUTH_FAILED';

// productTable
export const PROD_DETAIL_ON_CELL_EDIT = 'PROD_DETAIL_ON_CELL_EDIT'
export const PROD_DETAIL_ON_DELETE_ROW = 'PROD_DETAIL_ON_DELETE_ROW'
export const PROD_DETAIL_ON_ADD_ROW = 'PROD_DETAIL_ON_ADD_ROW'

/* The following are actions types for form edit.
 * it will generate action type combined with behavior, locales and Formset.
 * For example: When editing the seriesDetail form set in TW language
 * it will distribute actions with action type of 'ON_TW_TOP_BANNER_EDIT'.
 */

// edit form behavior
export const EDIT_FROM_CREATE = 'CREATE';
export const EDIT_FROM_EDIT = 'EDIT';
export const EDIT_FROM_DELETE = 'EDLETE';

// locale prefix
export const LOCALE_TW_PREFIX = 'TW_';
export const LOCALE_JP_PREFIX = 'JP_';
export const LOCALE_EN_PREFIX = 'EN_';

// mapFormSetToAttriName
export const MAP_FORMSET_TO_ATTRI_TOP_BANNER = 'TOP_BANNER';
export const MAP_FORMSET_TO_ATTRI_NEWS = 'NEWS';
export const MAP_FORMSET_TO_ATTRI_ABOUT = 'ABOUT';
export const MAP_FORMSET_TO_ATTRI_CONTACT = 'CONTACT';
export const MAP_FORMSET_TO_ATTRI_DOWNLOAD = 'DOWNLOAD';
export const MAP_FORMSET_TO_ATTRI_PRODUCTS = 'PRODUCTS';

/*
 * result of combination of action type
 */
export const ON_TW_TOP_BANNER_EDIT = 'ON_TW_TOP_BANNER_EDIT';
export const ON_TW_NEWS_EDIT = 'ON_TW_NEWS_EDIT';
export const ON_TW_ABOUT_EDIT = 'ON_TW_ABOUT_EDIT';
export const ON_TW_CONTACT_EDIT = 'ON_TW_CONTACT_EDIT';
export const ON_TW_DOWNLOAD_EDIT = 'ON_TW_DOWNLOAD_EDIT';
export const ON_TW_PRODUCTS_EDIT = 'ON_TW_PRODUCTS_EDIT';
