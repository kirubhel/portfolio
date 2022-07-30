import React from 'react'
import {FaSuitcase,FaGraduationCap} from 'react-icons/fa'
import wena from '../assets/clients/wena.jpg'
import daf from '../assets/clients/daf.jpg'
import gadal from '../assets/clients/gadal.jpg'
import pro from '../assets/user.png'
import Slider from "react-slick";
function Resume() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
     <div id="resume">
                
                <div className="row">
                    <section className="education">
                    <div className="section-title top_30"><span></span><h2>Resume</h2></div>
                        <div className="row">
                            
                            <div className="working-history col-md-6 padding_15 padbot_30">
                                <ul className="timeline col-md-12 top_30">
                                    <li><i className=''><FaSuitcase className='h-5 w-5'/></i><h2 className="timeline-title">Working History</h2></li>
                                   
                                    <li><h3 className="line-title">FullStack Developer - DAFTech Social</h3>
                                        <span>January 17, 2022 - Present</span>
                                        <p className="little-text"></p>
                                    </li>
                                   
                                    <li><h3 className="line-title">Junior Backend Developer -  DAFTech Social</h3>
                                        <span>September 13, 2021 - January 14, 2022</span>
                                        <p className="little-text"></p>
                                    </li>
                                 
                                    <li><h3 className="line-title">Junior Frontend Developer - DAFTech Social</h3>
                                        <span>February 15, 2021 - September 10, 2021</span>
                                        <p className="little-text"></p>
                                    </li>
                                </ul> 
                            </div>  
                         
                            <div className="education-history col-md-6 padding_15 padbot_30">
                                <ul className="timeline col-md-12 top_30">
                                    <li><i ><FaGraduationCap className='w-5 h-5'/></i><h2 className="timeline-title">Education History</h2></li>
                                  
                                    <li><h3 className="line-title">HiLCoE School of Computer Science</h3>
                                        <span>2016 - 2020</span>
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
                        <div className="section-title bottom_30"><span></span><h2>Clients</h2></div>
                        <div className="row p-2">
                        <Slider {...settings}> 
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="client">
                                    <img src={wena} className='h-13' alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="client p-2">
                                    <img src={daf} className='h-13' alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="client">
                                    <img src={wena} className='h-13' alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="client">
                                    <img src={daf} className='h-13' alt=""/>
                                </div>
                            </div>
                            </Slider>
                        
                        </div>
                    </section>
                </div>
                
                <div className="row">
                    <section className="testimonials bottom_30">
                        <div className="section-title top_60 bottom_30"><span></span><h2>Testimonials</h2></div>
                       {/* <Slider {...settings}>  
                            <div className="col-md-12 item">
                                <div className="comment">
                                    <div className="top-section">
                                        <figure>
                                            <img src={pro} alt=""/>
                                        </figure>
                                        <div className="name-info">
                                            <span className="name">Jack Garratt</span>
                                            <span className="job">Freelancer</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Great designer! he finished our work wonderfully and just in time. thanks for everything.</p>
                                </div>
                            </div>
                           
                            <div className="col-md-12 item">
                                <div className="comment">
                                    <div className="top-section">
                                        <figure>
                                            <img src={pro} alt=""/>
                                        </figure>
                                        <div className="name-info">
                                            <span className="name">April M. Griffin</span>
                                            <span className="job">Founder</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Our logo and business card design look great. Thanks Henry</p>
                                </div>
                            </div>
                            
                            <div className="col-md-12 item">
                                <div className="comment">
                                    <div className="top-section">
                                        <figure>
                                            <img src={pro} alt=""/>
                                        </figure>
                                        <div className="name-info">
                                            <span className="name">Larry M. Johnson</span>
                                            <span className="job">Freelancer</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Henry is a very creative and talented designer. I do not hesitate to work again.</p>
                                </div>
                            </div> 
                            
                            <div className="col-md-12 item">
                                <div className="comment">
                                    <div className="top-section">
                                        <figure>
                                            <img src={pro} alt=""/>
                                        </figure>
                                        <div className="name-info">
                                            <span className="name">Jack Garratt</span>
                                            <span className="job">Freelancer</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Great designer! he finished our work wonderfully and just in time. thanks for everything.</p>
                                </div>
                            </div>
                           
                            <div className="col-md-12 item">
                                <div className="comment">
                                    <div className="top-section">
                                        <figure>
                                            <img src={pro} alt=""/>
                                        </figure>
                                        <div className="name-info">
                                            <span className="name">April M. Griffin</span>
                                            <span className="job">Founder</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Our logo and business card design look great. Thanks Henry</p>
                                </div>
                            </div>
                           
                            <div className="col-md-12 item">
                                <div className="comment">
                                    <div className="top-section">
                                        <figure>
                                            <img src={pro} alt=""/>
                                        </figure>
                                        <div className="name-info">
                                            <span className="name">Larry M. Johnson</span>
                                            <span className="job">Freelancer</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Henry is a very creative and talented designer. I do not hesitate to work again.</p>
                                </div>
                            </div>
                            
                            <div className="col-md-12 item">
                                <div className="comment">
                                    <div className="top-section">
                                        <figure>
                                            <img src={pro} alt=""/>
                                        </figure>
                                        <div className="name-info">
                                            <span className="name">Jack Garratt</span>
                                            <span className="job">Freelancer</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Great designer! he finished our work wonderfully and just in time. thanks for everything.</p>
                                </div>
                            </div>
                            
                            <div className="col-md-12 item">
                                <div className="comment">
                                    <div className="top-section">
                                        <figure>
                                            <img src={pro} alt=""/>
                                        </figure>
                                        <div className="name-info">
                                            <span className="name">April M. Griffin</span>
                                            <span className="job">Founder</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Our logo and business card design look great. Thanks Henry</p>
                                </div>
                            </div>
                           
                            <div className="col-md-12 item">
                                <div className="comment">
                                    <div className="top-section">
                                        <figure>
                                            <img src={pro} alt=""/>
                                        </figure>
                                        <div className="name-info">
                                            <span className="name">Larry M. Johnson</span>
                                            <span className="job">Freelancer</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Henry is a very creative and talented designer. I do not hesitate to work again.</p>
                                </div>
                            </div>

</Slider>
                         */}
                    </section>
                </div>
            </div>
  )
}

export default Resume