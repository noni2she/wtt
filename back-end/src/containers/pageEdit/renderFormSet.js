import React from 'react';
// form set
import SeriesDetailFormSet from 'containers/pageEdit/formSet/seriesDetail';
import AboutFormSet from 'containers/pageEdit/formSet/about';
import HeaderFormSet from 'containers/pageEdit/formSet/header';
import CategoryFormSet from 'containers/pageEdit/formSet/category';

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
export const renderHeaderFormSet = (block, locales) => {
  return(
    <HeaderFormSet
      locales={locales}
      block={block}
    />
  );
}

//AboutDetailFormSet
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
