import React from 'react'
import Profilee from './Profilee'
import Header from './Header'
import Footer from './Footer'

import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="wrapper top_60 container lg:pt-10  px-10">
      <div className="row">
        <Profilee />
        <div id="ajax-tab-container" className="col-lg-9 col-md-8 tab-container">
          <div className="row">
            <Header />

            <div className="col-md-12">
              <div id="content" className="panel-container">
              <Outlet/>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout