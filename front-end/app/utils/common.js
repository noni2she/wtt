import uuidv4 from 'uuid/v4';
import { animateScroll } from 'react-scroll';

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
