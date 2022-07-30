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
            I am a detail-oriented recent college graduate ( Bachelor of Science
            in Computer Science) from HiLCoE School of Computer Science and
            Technology . During my Proficient career, I managed to accrue nearly
            17 months of work experience. I had the privilege of working for
            DAFTech Social in a software developer role. And in my free time,
            where I learned valuable professional skills such as mobile and
            desktop application development, database design, and web design. In
            both my academic and professional life, I have been consistently
            praised as focused by my professors and peers. Whether working on
            academic, extracurricular, or professional projects, I apply proven
            communication, creative thinking, and problem-solving skills.
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
                  I have been working on web design for 2 years.
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
                  I have been developing mobile app for 2 years.
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
                  I have been working on Desktop App for 2 years.
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
      <section className="code-skills col-md-6 padding_60">
                        <div className="section-title bottom_45"><span></span><h2>Code Skills</h2></div>
                        <ul className="skill-list">
                            <li> 
                                <h3>ASP.NET Core</h3>
                                <div className="progress">
                                    <div className="percentage w-[80%]" ></div>
                                </div>
                            </li>
                            <li> 
                                <h3>Node Js</h3>
                                <div className="progress">
                                    <div className="percentage w-[70%]" ></div>
                                </div>
                            </li>
                            <li> 
                                <h3>React</h3>
                                <div className="progress">
                                    <div className="percentage w-[80%]" ></div>
                                </div>
                            </li>
                            <li> 
                                <h3>Php (CodeIgniter)</h3>
                                <div className="progress">
                                    <div className="percentage w-[50%]" ></div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="design-skills col-md-6 padding_60 padbot_50">
                        <div className="section-title bottom_45"><span></span><h2>Design Skills</h2></div>
                        <ul className="skill-list">
                            <li> 
                                <h3>Photoshop</h3>
                                <div className="progress">
                                    <div className="percentage w-[50%]" ></div>
                                </div>
                            </li>
                            
                            <li> 
                                <h3>Adobe Xd</h3>
                                <div className="progress">
                                    <div className="percentage w-[60%]" ></div>
                                </div>
                            </li>
                        </ul>
                    </section>
                   
                </div>
      
      

    </div>
  );
}

export default Home;
