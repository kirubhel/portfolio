import React from "react";
import work1 from "../assets/cap1.png";
import work2 from "../assets/cap2.png";
import work3 from "../assets/cap3.png";
import work4 from "../assets/cap4.png";
import { FaClone } from "react-icons/fa";

function Portfolio() {
  return (
    <div id="portfolio" className="row bottom_45">
      <section className="col-md-12">
        <div className="col-md-12 content-header bottom_15">
          <div className="section-title top_30 bottom_30">
            <span></span>
            <h2>Portfolio</h2>
          </div>
          <div id="filters-container">
            <div
              data-filter="*"
              className="cbp-filter-item cbp-filter-item-active"
            >
              All
            </div>
            <div data-filter=".webdesign" className="cbp-filter-item">
              Web Design
            </div>
            <div data-filter=".motion" className="cbp-filter-item">
              Mobile App Development
            </div>
            <div data-filter=".illustration" className="cbp-filter-item">
              Desktop App Development
            </div>
          </div>
        </div>
        <div className="top_60">
          <div className="cbp-item webdesign ">
            <a
              href="https://mytutor87.000webhostapp.com/"
              target="_blank"
              className=" cbp-singlePage"
            >
              <div>
                <div className="icon">
                  <FaClone />
                </div>

                <div className="h-[400px] overflow-y-scroll">
                  <img src={work1} alt="" />
                </div>

                <figcaption>
                  <span className="title">MY TUTOR</span>
                  <br />
                  <span className="info">
                    Private Tutor Finder & online Tutoring.
                  </span>
                </figcaption>
              </div>
            </a>
          </div>
          <div className="cbp-item webdesign ">
            <a
              href="https://aisha-jewellery.000webhostapp.com/"
              target="_blank"
              className=" cbp-singlePage"
            >
              <div>
                <div className="icon">
                  <FaClone />
                </div>

                <div className="h-[400px] overflow-y-scroll">
                  <img src={work2} alt="" />
                </div>

                <figcaption>
                  <span className="title">AISHA JEWLERY STORE</span>
                  <br />
                  <span className="info">
                    Online Jewlery Store.
                  </span>
                </figcaption>
              </div>
            </a>
          </div>
          <div className="cbp-item webdesign ">
            <a
              href="https://wennovate.africa/"
              target="_blank"
              className=" cbp-singlePage"
            >
              <div>
                <div className="icon">
                  <FaClone />
                </div>

                <div className="h-[400px] overflow-y-scroll">
                  <img src={work3} alt="" />
                </div>

                <figcaption>
                  <span className="title">WENOVATE AFRICA</span>
                  <br />
                  <span className="info">
                    ...
                  </span>
                </figcaption>
              </div>
            </a>
          </div>
          <div className="cbp-item webdesign ">
            <a
              href="https://safari-travel.herokuapp.com/"
              target="_blank"
              className=" cbp-singlePage"
            >
              <div>
                <div className="icon">
                  <FaClone />
                </div>

                <div className="h-[400px] overflow-y-scroll">
                  <img src={work4} alt="" />
                </div>

                <figcaption>
                  <span className="title">SAFARI EDUCATIONAL CONCULTANCY</span>
                  <br />
                  <span className="info">
                    ...
                  </span>
                </figcaption>
              </div>
            </a>
          </div>
        </div>

        {/* <div id="js-loadMore-agency" className="cbp-l-loadMore-button top_30">
            <a href="load-more/portfolio.html" className="cbp-l-loadMore-link site-btn" rel="nofollow">
                <span className="cbp-l-loadMore-defaultText">Load More (<span className="cbp-l-loadMore-loadItems">3</span>)</span>
                <span className="cbp-l-loadMore-loadingText">Loading...</span>
                <span className="cbp-l-loadMore-noMoreLoading">No More Works</span>
            </a>
        </div> */}
      </section>
    </div>
  );
}

export default Portfolio;
