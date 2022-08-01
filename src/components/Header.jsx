import React, { useState } from "react";
import {
  FaHome,
  FaPaperPlane,
  FaBars,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const location = useLocation();
  return (
    <div>
      <header className="col-md-12">
        <nav>
          <div className="row">
            <div className="col-md-8 col-sm-8 col-xs-4">
              <ul className="tabs">
                <li className="tab">
                  <Link className="home-btn inline-flex items-center" to="/">
                    <FaHome className=" w-8 h-8" />
                  </Link>
                </li>
                <li className="tab">
                  <Link
                    className={location == "resume" ? "text-[#526BC8]" : ""}
                    to="resume"
                  >
                    RESUME
                  </Link>
                </li>
                <li className="tab">
                  <Link
                    className={location == "portfolio" ? "text-[#526BC8]" : ""}
                    to="portfolio"
                  >
                    PORTFOLIO
                  </Link>
                </li>
                {/* <li className="tab">
                        <Link className={location=='blog'?'text-[#526BC8]':''} to="blog">BLOG</Link>
                      </li> */}
                <li className="tab">
                  <Link
                    className={location == "contact" ? "text-[#526BC8]" : ""}
                    to="contact"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-8 dynamic">
              <a
                href="https://t.me/kirube_l"
                target="_blank"
                className="pull-right site-btn icon hidden-xs inline-flex items-center"
              >
                Hire Me
                <FaPaperPlane className="rounded-2xl my-1 bg-white text-[#526BC9] mx-2 w-8 h-8 p-[8px] " />
              </a>
              <div className="hamburger pull-right hidden-lg hidden-md">
                <FaBars
                  onClick={() => {
                    setIsMenuVisible(!isMenuVisible);
                  }}
                />

              </div>

              
<ul className={isMenuVisible ? " z-30  absolute mt-4 md:hidden " : "hidden"}>
                  <li className="">
                    <Link
                      className={location == "resume" ? "text-[#526BC8] text-[12px] text-right" : "text-[12px]"}
                      to="resume"
                    >
                      RESUME
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className={
                        location == "portfolio" ? "text-[#526BC8]text-[12px]" : "text-[12px]"
                      }
                      to="portfolio"
                    >
                      PORTFOLIO
                    </Link>
                  </li>
                  {/* <li className="tab">
               <Link className={location=='blog'?'text-[#526BC8]':''} to="blog">BLOG</Link>
             </li> */}
                  <li className="">
                    <Link
                      className={location == "contact" ? "text-[#526BC8]text-[12px]" : "text-[12px]"}
                      to="contact"
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              <div className="hidden-md social-icons pull-right">
                <a className="tw" target="_blank" href="https://t.me/kirube_l">
                  <FaTelegram />
                </a>
                <a className="ins" href="#">
                  <FaInstagram />
                </a>
                <a
                  className="dr"
                  target="_blank"
                  href="https://www.linkedin.com/in/kirubel-gizaw-b8bab1244/"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        
        </nav>
      </header>
    </div>
  );
}

export default Header;
