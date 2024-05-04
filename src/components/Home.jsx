import React from "react";
import {
  AiOutlineHtml5,
  AiOutlineMobile,
  AiOutlineDesktop,
  AiOutlineSchedule,
} from "react-icons/ai";

function Home() {
  return (
    <div id="home">
      <div className="row">
        <section className="about-me line col-md-12 padding_30 padbot_45">
          <div className="section-title">
            <span></span>
            <h2>About Me</h2>
          </div>
          <p className="top_30">
            A skilled Software Developer with more than 3 years of experience.
            Since February 2021, I've been actively contributing my expertise as
            a Software Developer at DAFTech Social ICT Solution, where I
            specialize in developing web applications using ASP.NET Core,
            Angular, Django REST API, and React. My responsibilities have
            involved various projects spanning website, mobile app, and desktop
            app development, showcasing my proficiency across different
            platforms. I am committed to continuous learning and growth, staying
            updated with the latest technologies and industry trends. My strong
            background in software development, coupled with effective
            communication skills and a proactive approach, enables me to thrive
            in fast-paced environments and deliver high- quality results
            consistently.
            <br />
            <br /> After reviewing my resume, I hope you will agree that I am
            the type of competent and the competitive candidate you are looking
            for, I look forward to elaborating on how my specific skills and
            abilities will benefit your organization thank you for your
            consideration, and I look forward to hearing from you soon.
          </p>
        </section>
      </div>

      <div className="row">
        <section className="services line graybg col-md-12 padding_50 padbot_50">
          <div className="section-title bottom_45">
            <span></span>
            <h2>My Services</h2>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="service">
                <div className="icon">
                  <AiOutlineHtml5 className="w-11 h-12" />
                </div>
                <span className="title">Web Development</span>
                <p className="little-text">
                  I have been working on web design for more than 3 years.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="service">
                <div className="icon">
                  <AiOutlineMobile className="w-11 h-12" />
                </div>
                <span className="title">Mobile Development</span>
                <p className="little-text">
                  I have been developing mobile app for more than 3 years.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="service">
                <div className="icon">
                  <AiOutlineDesktop className="w-11 h-12" />
                </div>
                <span className="title">Desktop Development</span>
                <p className="little-text">
                  I have been working on Desktop App for more than 3 years.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="service">
                <div className="icon">
                  <AiOutlineSchedule className="w-11 h-12" />
                </div>
                <span className="title">Fast Delivery</span>
                <p className="little-text">
                  I deliver your business as fast as possible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="row">
        <section className="code-skills col-md-4 padding_60">
          <div className="section-title bottom_45">
            <span></span>
            <h2>Frontend Skills</h2>
          </div>
          <ul className="skill-list">
            <li>
              <h3>Angular</h3>
              <div className="progress">
                <div className="percentage w-[90%]"></div>
              </div>
            </li>
         
            <li>
              <h3>React</h3>
              <div className="progress">
                <div className="percentage w-[80%]"></div>
              </div>
            </li>
           
          </ul>
        </section>
        <section className="design-skills col-md-4 padding_60 padbot_50">
          <div className="section-title bottom_45">
            <span></span>
            <h2>Backend Skills</h2>
          </div>
          <ul className="skill-list">
            <li>
              <h3>ASP.NET Core</h3>
              <div className="progress">
                <div className="percentage w-[90%]"></div>
              </div>
            </li>

            <li>
              <h3>Django REST API</h3>
              <div className="progress">
                <div className="percentage w-[80%]"></div>
              </div>
            </li>
          </ul>
        </section>
        <section className="design-skills col-md-4 padding_60 padbot_50">
          <div className="section-title bottom_45">
            <span></span>
            <h2>Mobile app Skills</h2>
          </div>
          <ul className="skill-list">
            <li>
              <h3>Kotlin</h3>
              <div className="progress">
                <div className="percentage w-[80%]"></div>
              </div>
            </li>

            <li>
              <h3>Flutter</h3>
              <div className="progress">
                <div className="percentage w-[80%]"></div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
