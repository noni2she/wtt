import React    from 'react';
import ReactDOM from 'react-dom';

import "../assets/styles/index.sass";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //debugger;
    //this.initCarousel();
  }

  initCarousel() {
    let li = "";
    let getActive = $(".carousel .active");
    let activeNodeIndex =  $(".carousel .carousel-inner .item").index(getActive);

    for (let i = 0; i < $(".carousel .carousel-inner .item").length; i++){
      if (i === activeNodeIndex/2) {
        li += "<li data-target='#carousel-advertisment' data-slide-to='"+i+"' class='active'></li>";
      } else {
        li += "<li data-target='#carousel-advertisment' data-slide-to='"+i+"' class=''></li>";
      }
    }

    if ($(".carousel .carousel-inner .item").length < 2) {
      $(".carousel-indicators").hide();
    }

    $(".carousel-indicators").append(li);

    $(".carousel").carousel({
      interval: 3000,
      pause: "hover"
    });
  }

  renderAdImages() {
    let imgList = ["ad-1.png", "ad-2.png"];

    return (
      <div id="carousel-advertisment" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          {
            imgList.map((imgItem, index) => {
              return (
                <div key={index} className={index === 0 ? "item active" : "item"}>
                  <img src={require(`../assets/images/${imgItem}`)} />
                </div>
              );
            })
          }
        </div>
        <ol className="carousel-indicators">
          {
            imgList.map((imgItem, index) => {
              return (
                <li key={index} data-target="#carousel-advertisment" data-slide-to={index} className={index === 0 ? "indicator active" : "indicator"}></li>
              );
            })
          }
        </ol>
      </div>
    );
  }

  render() {
    return (
      <div id="main">
        <div className="header">
          <div className="navbar navbar-inverse navbar-static-top header-inner">
            <div className="container">
              <header className="navbar-header logo">
                <a className="logo-link" href="/"><i className="icon-logo"></i></a>
              </header>
              <nav className="navbar-collapse navigation">
                <ul className="nav navbar-nav">
                  <li data="about-us"><a href="/">ABOUT US</a></li>
                  <li data="products"><a href="/">PRODUCTS</a></li>
                  <li data="news"><a href="/">NEWS</a></li>
                  <li data="download"><a href="/">DOWNLOAD</a></li>
                  <li data="contact"><a href="/">CONTACT</a></li>
                  <li className="dropdown locale">
                    <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      EN   
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>JP</li>
                      <li>CN</li>
                    </ul>
                  </li>
                </ul>
                <div className="message">
                  <a className="message-link">Write to us</a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {this.renderAdImages()}

        <div id="products">
          <h2>- PRODUCTS -</h2>
          <p>To provide our customers better products and services.</p>
          <div className="products-1">
            <h3>- WHEEL SPACERS -</h3>
            <div className="product-nav container">
              <ul>
                <li className="series">-Hs Series</li>
                <li className="series">-BHA Series</li>
                <li className="series">-WS Series</li>
                <li className="series">-SWA Series</li>
                <li className="series">-SHA Series</li>
                <li className="series">-SST Series</li>
              </ul>
            </div>
          </div>

          <div className="products-2">
            <h3>- UNIVERSAL SPACERS -</h3>
          </div>

          <div className="products-3">
            <h3>- WHEEL BOLTS -</h3>
          </div>

          <div className="products-4">
            <h3>- HUB RINGS -</h3>
          </div>

          <div className="products-5">
            <h3>- LUG NUT -</h3>
          </div>
        </div>

        <div id="news">
          <h2>- NEWS -</h2>
          <p>Please find below the schedule of trade shows we exhibit. To see more information, please on the hyperlinks of official websites.</p>
          <div id="carousel-news" className="carousel">
            <div className="carousel-inner">
              <div className="item">
                <div className="news-board">
                  <div className="news-board-picture">
                    <img />
                  </div>
                  <div className="news-board-desp">
                    <h3></h3>
                    <p></p>
                    <div className="news-date"></div>
                    <p></p>
                  </div>
                  <div className="seq"></div>
                </div>
              </div>
              <div className="item">
                <div className="news-board">
                  <div className="news-board-picture">
                    <img />
                  </div>
                  <div className="news-board-desp">
                    <h3></h3>
                    <p></p>
                    <div className="news-date"></div>
                    <p></p>
                  </div>
                  <div className="seq"></div>
                </div>
              </div>
              <div className="item">
                <div className="news-board">
                  <div className="news-board-picture">
                    <img />
                  </div>
                  <div className="news-board-desp">
                    <h3></h3>
                    <p></p>
                    <div className="news-date"></div>
                    <p></p>
                  </div>
                  <div className="seq"></div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#carousel-news" data-slide-to="0"></li>
            <li data-target="#carousel-news" data-slide-to="1"></li>
            <li data-target="#carousel-news" data-slide-to="2"></li>
          </ol>
        </div>

        <div id="download">
          <h2>- DOWNLOAD -</h2>
          <p>Please click on th picture or Download button to save the file directly to your computer.</p>
        </div>

        <div id="about-us">
          <h2>- ABOUT US -</h2>
          <p></p>
        </div>

        <div id="contact">
          <h2>- CONTACT -</h2>
          <p>New business, press or general enquires? Contact us!</p>
        </div>

        <div className="footer">
          <footer>
            <i className="icon-logo-footer"></i>
            <span className="company-statement">2017 Techwell industried co.,ltd. All</span>
          </footer>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));