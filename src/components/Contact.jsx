import React from "react";
import { FaTelegram, FaLinkedin ,FaGithub} from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Start loading
    setLoading(true);

    // Here you can handle the form submission logic
    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('https://formspree.io/f/mjvnlplz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Set submission success and stop loading
        setSubmitted(true);
        setLoading(false);
      } else {
        // Set submission error and stop loading
        setSubmissionError('There was an error submitting the form.');
        setLoading(false);
      }
    } catch (error) {
      // Set submission error and stop loading
      setSubmissionError('There was an error submitting the form.');
      setLoading(false);
    }
  };


  return (
    <div id="contact">
      <div className="row">
        <section className="contact-form col-md-6 padding_30 padbot_45">
          <div className="section-title top_15 bottom_30">
            <span></span>
            <h2>Contact Form</h2>
          </div>
          <div>
      {submitted ? (
        <p>Thank you for your submission!</p>
      ) : (
        <form className="site-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <input
                className="site-input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                className="site-input"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </div>
            <div className="col-md-12">
              <textarea
                className="site-area"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="col-md-12 top_15 bottom_30">
              <button className="site-btn" type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      )}

      {submissionError && <p>{submissionError}</p>}
    </div>
        </section>

        <section className="contact-info col-md-6 padding_30 padbot_45">
          <div className="section-title top_15 bottom_30">
            <span></span>
            <h2>Contact Informations</h2>
          </div>
          <ul>
            <li>
              <span>Address:</span> Urael, Equatorial Guinea St, Addis Ababa,
              Ethiopia
            </li>
            <li>
              <span>Phone:</span> +251 9198-70929
            </li>
            <li>
              <span>Job:</span> Freelancer
            </li>
            <li>
              <span>E-mail:</span> kirub.hel@gmail.com
            </li>
            <li>
              <span>Telegram:</span> @kirube_l
            </li>
            <li>
              <div className="social-icons top_15">
                <a className="tw" target="_blank" href="https://t.me/kirube_l">
                  <FaTelegram />
                </a>


                <a className="tw" target="_blank" href="https://github.com/kirubhel">
                  <FaGithub />
                </a>

                <a
                  className="dr"
                  target="_blank"
                  href="https://www.linkedin.com/in/kirubel-gizaw-b8bab1244/"
                >
                  <FaLinkedin />
                </a>
                {/* <a className="fb" href="#"><FaFacebook/></a> 
                        <a className="tw" href="#"><FaPaperPlane/></a> 
                        <a className="ins" href="#"><FaInstagram/></a> 
                        <a className="dr" href="#"><FaLinkedin/></a>  */}
              </div>
            </li>
          </ul>
        </section>

        <section className="contact-map col-md-12 top_15 bottom_15">
          <div className="section-title bottom_30">
            <span></span>
            <h2>Contact Map.</h2>
          </div>
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
              <Popup>Kirubel Gizaw.</Popup>
            </Marker>
          </MapContainer>
        </section>
      </div>
    </div>
  );
}

export default Contact;
