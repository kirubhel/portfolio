import React from 'react'

function Portfolio() {
  return (
    <div id="portfolio" className="row bottom_45">
    <section className="col-md-12">
        <div className="col-md-12 content-header bottom_15">
            <div className="section-title top_30 bottom_30"><span></span><h2>Portfolio</h2></div>
            <div id="filters-container">
               
                <div data-filter="*" className="cbp-filter-item cbp-filter-item-active">All</div>
                <div data-filter=".webdesign" className="cbp-filter-item">Web Design</div>
                <div data-filter=".motion" className="cbp-filter-item">Mobile App Development</div>
                <div data-filter=".illustration" className="cbp-filter-item">Desktop App Development</div>
               
            </div>
        </div>
        <div id="grid-container" className="top_60">
            
            <div className="cbp-item webdesign">
                <a href="portfolio-detail/work-01.html" className=" cbp-singlePage">
                    <figure>
                        <div className="icon">
                            <i className="fa fa-clone" aria-hidden="true"></i>
                        </div>
                        <img src="images/works/work-01.jpg" alt="" />
                        <figcaption>
                            <span className="title">Babel Admin</span><br/>
                            <span className="info">An admin template design.</span>
                        </figcaption>
                    </figure>
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
  )
}

export default Portfolio