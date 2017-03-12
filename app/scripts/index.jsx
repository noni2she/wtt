import React    from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <div className="header">
          <div className="container">
            <header className="logo"><i className="icon-logo"></i></header>
            <nav className="navigation">
              <ul>
                <li data="about-us"></li>
                <li data="products"></li>
                <li data="news"></li>
                <li data="download"></li>
                <li data="contact"></li>
                <li className="dropdown locale">
                </li>
              </ul>
            </nav>
            <div className="message">
              <i className="icon-chat-dialog"></i>
              <a className="message-link">Write to us</a>
            </div>
          </div>
        </div>

        <div id="carousel-advertisment" className="carousel">
          <div className="carousel-inner">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#carousel-advertisment" data-slide-to="0"></li>
            <li data-target="#carousel-advertisment" data-slide-to="1"></li>
            <li data-target="#carousel-advertisment" data-slide-to="2"></li>
          </ol>
        </div>

        <div id="products">
          <h2>- PRODUCTS -</h2>
          <p>To provide our customers better products and services.</p>
          <div className="products01">
            <h3>- WHEEL SPACERS -</h3>
            <div className="products01-nav container">
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

          <div className="products02">
            <h3>- UNIVERSAL SPACERS -</h3>
          </div>

          <div className="products03">
            <h3>- WHEEL BOLTS -</h3>
          </div>

          <div className="products04">
            <h3>- HUB RINGS -</h3>
          </div>

          <div className="products05">
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