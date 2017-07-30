import uuidv4 from 'uuid/v4';
import { animateScroll } from 'react-scroll';
import { LOCALE_TW, LOCALE_JP, LOCALE_EN } from 'constants/common';



export const uuid = uuidv4;

export const linkScroll = () => {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  } else {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }
};

export const findMapURL = (locale = LOCALE_TW) => {
  switch (locale) {
  case LOCALE_TW:
  default:
    return 'https://www.google.com.tw/maps/place/338%E6%A1%83%E5%9C%92%E5%B8%82%E8%98%86%E7%AB%B9%E5%8D%80%E4%B8%AD%E8%88%88%E4%B8%80%E8%A1%97150%E8%99%9F/@25.0153456,121.2631025,17z/data=!3m1!4b1!4m5!3m4!1s0x34681f80e08ebe2b:0x7d7ef8cd779499aa!8m2!3d25.0153408!4d121.2652912?hl=zh-TW';
  case LOCALE_EN:
  case LOCALE_JP:
    return 'https://www.google.com.tw/maps/place/No.+150,+Zhongxing+1st+Street,+Luzhu+District,+Taoyuan+City,+338/@25.015382,121.2631818,16z/data=!4m5!3m4!1s0x34681f80e08ebe2b:0x7d7ef8cd779499aa!8m2!3d25.0153408!4d121.2652912?hl=en';
  }
};
