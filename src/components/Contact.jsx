import React from 'react'
import {FaHome,FaPaperPlane, FaBars,FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Contact() {
  return (
    <div id="contact">
    <div className="row">
        
        <section className="contact-form col-md-6 padding_30 padbot_45">
            <div className="section-title top_15 bottom_30"><span></span><h2>Contact Form</h2></div>
            <form className="site-form">
                <div className="row">
                    <div className="col-md-6">
                        <input className="site-input" placeholder="Name"/>
                    </div>
                    <div className="col-md-6">
                        <input className="site-input" placeholder="E-mail"/>
                    </div>
                    <div className="col-md-12">
                        <textarea className="site-area" placeholder="Message"></textarea>
                    </div>
                    <div className="col-md-12 top_15 bottom_30">
                        <button className="site-btn" type="submit">Submit</button>
                    </div>
                </div>
            </form>  
        </section>
        
        <section className="contact-info col-md-6 padding_30 padbot_45">
            <div className="section-title top_15 bottom_30"><span></span><h2>Contact Informations</h2></div>
            <ul>
                <li><span>Address:</span> Urael, Equatorial Guinea St, Addis Ababa, Ethiopia</li>
                <li><span>Phone:</span> +251 9198-70929</li>
                <li><span>Job:</span> Freelancer</li>
                <li><span>E-mail:</span> kirub.hel@gmail.com</li>
                <li><span>Telegram:</span> @kirube_l</li>
                <li>
                    <div className="social-icons top_15"> 
                        <a className="fb" href="#"><FaFacebook/></a> 
                        <a className="tw" href="#"><FaPaperPlane/></a> 
                        <a className="ins" href="#"><FaInstagram/></a> 
                        <a className="dr" href="#"><FaLinkedin/></a> 
                    </div>
                </li>
            </ul>
        </section>
     
        <section className="contact-map col-md-12 top_15 bottom_15">
            <div className="section-title bottom_30"><span></span><h2>Contact Map.</h2></div>  
            <MapContainer
          center={[9.0113403, 38.7664455]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[9.0113403, 38.7664455]}>
            <Popup>
             Kirubel Gizaw.
            </Popup>
          </Marker>
        </MapContainer>
        </section>
    </div>
</div>
  )
}

export default Contact