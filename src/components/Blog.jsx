import React from 'react'
import blog1 from '../assets/blog-1.jpg'

function Blog() {
  return (
    <div id="blog">
    <div className="row">
        <section className="blog col-md-12 bottom_30">
            <div className="col-md-12 content-header">
                <div className="section-title top_30 bottom_15"><span></span><h2>Blog Posts</h2></div>
            </div>
            <div id="grid-blog" className="row">
                
                <div className="cbp-item ">
                    <a href="blog-posts/blog-1.html" className="blog-box">
                        <div className="blog-img">
                            <img src={blog1} alt=""/>
                        </div>
                        <div className="blog-box-info">
                            <span className="category">General</span> 
                            <h2 className="title">See my current workspace</h2>
                            <p className="little-text">The first thing to remember about success is that it is a process.</p>
                            <span className="date">8 Nov 17</span>
                        </div>
                    </a>
                </div>
                
                
                
                
            </div>
            
            {/* <div id="load-posts" className="cbp-l-loadMore-button top_60">
                <a href="load-more/blog-posts.html" className="cbp-l-loadMore-link site-btn" rel="nofollow">
                    <span className="cbp-l-loadMore-defaultText">Load More (<span className="cbp-l-loadMore-loadItems">3</span>)</span>
                    <span className="cbp-l-loadMore-loadingText">Loading...</span>
                    <span className="cbp-l-loadMore-noMoreLoading">No More Works</span>
                </a>
            </div> */}
        </section>
    </div>
</div>
  )
}

export default Blog