import React from 'react';
// form set
import SeriesDetailFormSet from 'containers/pageEdit/formSet/seriesDetail';
import AboutDetailFormSet from 'containers/pageEdit/formSet/aboutDetail';

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

//AboutDetailFormSet
export const renderAboutDetailFormSet = (props) => {
  const { locales } = props;
  const { about } = props[locales];
  return(
    <AboutDetailFormSet
      locales={locales}
      about={about}
    />
  );
}
