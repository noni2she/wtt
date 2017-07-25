// locales
export const LOCALE_TW = 'tw'
export const LOCALE_JP = 'jp'
export const LOCALE_EN = 'en'

export const NAV_BAR_LANGUAGE_TW = '中文';
export const NAV_BAR_LANGUAGE_JP = '日文';
export const NAV_BAR_LANGUAGE_EN = '英文';

// components
export const PRODUCT_STYLE_CYCLE = 2;
export const SERIES_ITEM_COUNT_PER_ROW = 6;

// nav bar highlight when active
export const NAV_BAR_INDEX = 'NAV_BAR_INDEX';
export const NAV_BAR_MESSAGES = 'NAV_BAR_MESSAGES';

// product table
export const PROD_DETAIL_TALBE_COLUMN_TITLE_MAX = 6;
export const PROD_DETAIL_TALBE_CELL_PER_ROW = 3;
export const PROD_DETAIL_DESCRIP_MAX = 10;

// products
export const PRODUCTS_DESCRIPT_COUNT = 10;

// attribute name
export const ATTRI_NAME_TOP_BANNER = 'topBanner';
export const ATTRI_NAME_NEWS = 'news';
export const ATTRI_NAME_ABOUT = 'about';
export const ATTRI_NAME_CONTACT = 'contact';
export const ATTRI_NAME_DOWNLOAD = 'download';
export const ATTRI_NAME_PRODUCTS = 'products';

// formSet
export const FORM_SET_SERIES_DETAIL = 'FORM_SET_SERIES_DETAIL';
export const FORM_SET_HEADER = 'FORM_SET_HEADER';
export const FORM_SET_ABOUT = 'FORM_SET_ABOUT';
export const FORM_SET_CATEGORY = 'FORM_SET_CATEGORY';
export const FORM_SET_TOP_BANNER = 'FORM_SET_TOP_BANNER';
export const FORM_SET_NEWS_ITEM = 'FORM_SET_NEWS_ITEM';
export const FORM_SET_CONTACT = 'FORM_SET_CONTACT';
export const FORM_SET_DOWNLOAD_ITEM = 'FORM_SET_DOWNLOAD_ITEM';

// create form or action
export const CREATE_NEWS_ITEM = 'CREATE_NEWS_ITEM';
export const CREATE_DOWNLOAD_ITEM = 'CREATE_DOWNLOAD_ITEM';
export const CREATE_PRODUCT_SERIES = 'CREATE_PRODUCT_SERIES';
export const CREATE_PRODUCT_CATEGORY = 'CREATE_PRODUCT_CATEGORY';

// delete form or action
export const DELETE_NEWS_ITEM = 'DELETE_NEWS_ITEM';
export const DELETE_DOWNLOAD_ITEM = 'DELETE_DOWNLOAD_ITEM';
export const DELETE_PRODUCT_SERIES = 'DELETE_PRODUCT_SERIES';
export const DELETE_PRODUCT_CATEGORY = 'DELETE_PRODUCT_CATEGORY';

export const toastrOptions = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

// toast title
export const TOAST_TITLE_IMPORT_MODAL = '資料匯入';
export const TOAST_TITLE_CREATE_NEWSITEM = '新增 news';
export const TOAST_TITLE_CREATE_DOWNLOADITEM = '新增 download';
export const TOAST_TITLE_DELETE_FAILED = '刪除失敗';

// toastr message
export const TOAST_MESSAGE_SUCCESS = '成功';
export const TOAST_MESSAGE_FAILED = '失敗';
export const TOAST_MESSAGE_IMPORT_MODAL_SUCCESS = '成功';
export const TOAST_MESSAGE_IMPORT_MODAL_FAILED = '失敗';
export const TOAST_MESSAGE_SERIES_ITEM_DELETE_FAILED = ' seriesItem 數量不能低於 1';
