import React from "react";
import { FaSuitcase, FaGraduationCap } from "react-icons/fa";
import wena from "../assets/clients/wena.jpg";
import daf from "../assets/clients/daf.jpg";
import crave from "../assets/clients/crave.png";
import emwa from "../assets/clients/EMwA.png";
import tour from "../assets/clients/tour.png";
import award from "../assets/clients/ethioplanet.png";

import Slider from "react-slick";

function Resume() {
  const settings = {
    dots: false, // Remove the dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Adjust dots for responsiveness if needed
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Adjust dots for responsiveness if needed
        },
      },
    ],
  };

  const images = [wena, daf, crave, emwa, award, tour];
  return (
    <div id="resume">
      <div className="row">
        <section className="education">
          <div className="section-title top_30">
            <span></span>
            <h2>Resume</h2>
          </div>
          <div className="row">
            <div className="working-history col-md-6 padding_15 padbot_30">
              <ul className="timeline col-md-12 top_30">
                <li>
                  <i className="">
                    <FaSuitcase className="h-5 w-5" />
                  </i>
                  <h2 className="timeline-title">Working History</h2>
                </li>

                <li>
                  <h3 className=" ">FullStack Developer - DAFTech Social</h3>
                  <span>January 17, 2022 - Present</span>
                  <p className="little-text"></p>
                </li>

                <li>
                  <h3 className="">
                    Junior Backend Developer - DAFTech Social
                  </h3>
                  <span>September 13, 2021 - January 14, 2022</span>
                  <p className="little-text"></p>
                </li>

                <li>
                  <h3 className="">
                    Junior Frontend Developer - DAFTech Social
                  </h3>
                  <span>February 15, 2021 - September 10, 2021</span>
                  <p className="little-text"></p>
                </li>
              </ul>
            </div>

            <div className="education-history col-md-6 padding_15 padbot_30">
              <ul className="timeline col-md-12 top_30">
                <li>
                  <i>
                    <FaGraduationCap className="w-5 h-5" />
                  </i>
                  <h2 className="timeline-title">Education History</h2>
                </li>

                <li>
                  <h3 className="">
                    HiLCoE School of Computer Science & Technology
                  </h3>

                  <span>BSC Computer Science ( 2016 - 2021)</span>
                  <p className="little-text"></p>
                </li>

                {/* <li><h3 className="line-title">Drawing Course</h3>
                                        <span>2014 - 2016</span>
                                        <p className="little-text">So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.</p>
                                    </li> */}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="row">
        <section className="clients col-md-12 graybg padding_45 padbot_45">
          <div className="section-title bottom_30">
            <span></span>
            <h2>Clients</h2>
          </div>
          <div className="row p-2">
            <Slider {...settings}>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="client">
                  <img src={wena} className="h-13" alt="" height="200px" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="client p-2">
                  <img src={daf} className="h-13" alt="" height="200px" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="client">
                  <img src={crave} className="h-13" alt="" height="200px" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="client">
                  <img src={emwa} className="h-13" alt="" height="200px" />
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="client">
                  <img src={award} className="h-13" alt="" height="200px" />
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="client">
                  <img src={tour} className="h-13" alt="" height="200px" />
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
