import React from 'react';
// form set
import SeriesDetailFormSet from 'containers/pageEdit/formSet/seriesDetail';
import AboutFormSet from 'containers/pageEdit/formSet/about';
import HeaderFormSet from 'containers/pageEdit/formSet/header';
import CategoryFormSet from 'containers/pageEdit/formSet/category';
import NewsItemFormSet from 'containers/pageEdit/formSet/newsItems';
import TopBannerFormSet from 'containers/pageEdit/formSet/topBanner';
import ContactFormSet from 'containers/pageEdit/formSet/contact';

//SeriesDetailFormSet
export const renderSeriesDetailFormSet = (props, categoryKey, seriesKey) => {
  try {
    const { locales } = props;
    const { products } = props[locales];

    // get the index of categoryItems and seriesItems
    let categoryItemsIndex, seriesItemsIndex;
    for (let index = 0 ; index < products.categoryItems.length ; index++) {
      if (products.categoryItems[index].key === categoryKey) {
        categoryItemsIndex = index;
        break;
      }
    }
    for (let index = 0 ; index < products.categoryItems[categoryItemsIndex].seriesItems.length ; index++) {
      if (products.categoryItems[categoryItemsIndex].seriesItems[index].key === seriesKey) {
        seriesItemsIndex = index;
        break;
      }
    }

    const seriesItem = products.categoryItems[categoryItemsIndex].seriesItems[seriesItemsIndex];

    return(
      <SeriesDetailFormSet
        locales={locales}
        seriesItem={seriesItem}
        categoryItemsIndex={categoryItemsIndex}
        seriesItemsIndex={seriesItemsIndex}
      />
    );
  } catch (error) {
    console.error(error);
    return false;
  }
}

//HeaderFormSet
export const renderHeaderFormSet = (props, blockType) => {
  const { locales } = props;
  const { contact } = props[locales];

  switch (blockType) {
    case 'contact':
    return (
      <HeaderFormSet
        locales={locales}
        block={contact}
      />
    );
    default:
      break;
  }
}

//AboutFormSet
export const renderAboutFormSet = (props) => {
  const { locales } = props;
  const { about } = props[locales];
  return(
    <AboutFormSet
      locales={locales}
      about={about}
    />
  );
}

// renderCategoryFormSet
export const renderCategoryFormSet = (props, categoryIndex) => {
  try {
    const { locales } = props;
    const { products } = props[locales];
    const categoryItem = products.categoryItems[categoryIndex];

    if (!categoryItem) return false;

    // pass whatever you what.
    return (
      <CategoryFormSet
        locales={locales}
        categoryItem={categoryItem}
        categoryIndex={categoryIndex}
      />
    );
  } catch (error) {
    console.error(error);
    return false;
  }
}

// renderNewsItemFormSet
export const renderNewsItemFormSet = (props, newsItemIndex) => {
  try {
    const { locales } = props;
    const { news } = props[locales];
    const newsItem = news.newsItems[newsItemIndex];

    if (!newsItem) return false;

    return (
      <NewsItemFormSet
        locales={locales}
        newsItem={newsItem}
        newsItemIndex={newsItemIndex}
      />
    );
  } catch (error) {
    console.error(error);
    return false;
  }
}

// renderTopBannerFormSet
export const renderTopBannerFormSet = (props) => {
  try {
    const { locales } = props;
    const { imgItems } = props[locales].topBanner;

    return (
      <TopBannerFormSet
        locales={locales}
        imgItems={imgItems}
      />
    );
  } catch (error) {
    console.error(error);
    return false;
  }
}

//ContactFormSet
export const renderContactFormSet = (props) => {
  try {
    const { locales } = props;
    const { contact } = props[locales];
    return(
      <ContactFormSet
        locales={locales}
        contact={contact}
      />
    );
  } catch (error) {
    console.error(error);
    return false;
  }
}
