import React from 'react';

export default (props) => {
  const { name, mainImg, subImg, downloadLink, description } = props.seriesItem;
  return (
    <div className="products-contents row ">
      <div className="col-lg-5 col-md-5 col-sm-5">
        <div
          className="products-main-image"
          style={{
            backgroundImage: `url(${mainImg.imgUrl})`
          }}
        >
        </div>
      </div>

      <div className="products-information col-lg-7 col-md-7 col-sm-7">
        <div className="products-description">
          <h1 className="prod-descript-name">{name}</h1>
          <h2 className="prod-descript-feature">{'Feature'}</h2>
          { description.map((item, index) => {
              // it won't render description without title
              return item.title ? (
                <div className="prod-descript-text" key={`products-description-${index}`}>
                  <span className="prod-descript-title">{`${item.title} - `}</span>
                  <span className="prod-descript-content">{item.content}</span>
                </div>
              ) : (
                null
              )
            })
          }

          {
            !!downloadLink ? (
              <div className="products-download-link">
                <i className="glyphicon glyphicon-download-alt" />
                <div>
                  {downloadLink.key !== '' ? `${downloadLink.key}: ` : ""}
                  <a className="download-link-url" href={downloadLink.linkUrl} target="_blank">Download</a>
                </div>
              </div>
            ) : (
              null
            )
          }
        </div>
        <div
          className="products-sub-image"
          style={{
            backgroundImage: `url(${subImg.imgUrl})`
          }}
        >
        </div>
      </div>
    </div>
  );
}