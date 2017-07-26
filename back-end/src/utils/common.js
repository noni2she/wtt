import toastr from 'toastr';
import uuidv4 from 'uuid/v4';
import { toastrOptions } from 'constants/common';
import { animateScroll } from 'react-scroll';

export const uuid = uuidv4;

export const successToastr = (data, options) => {
  const { title, message } = data;
  toastr.options = {
    ...toastrOptions,
  };
  toastr.success(message, title);
};

export const errorToastr = (data, options) => {
  const { title, message } = data;
  toastr.options = {
    ...toastrOptions,
  };
  toastr.error(message, title);
};

export const linkScroll = () => {
  animateScroll.scrollToTop({
    duration: 0,
  });
};