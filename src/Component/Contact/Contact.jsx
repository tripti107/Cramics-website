/*import React from "react";
import "./Contact.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h2>Contact us</h2>
          <div className="graph">
            <p>02–233 Warszawa</p>
            <p>Al. Jerozolimskie 12</p>
            <p>email@contact.com</p>
            <p>+48 500 500 500</p>
          </div>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="contact-right">
          <form>
            <label>First name:</label>
            <input type="text" placeholder="Anna" />
            <label>Your e-mail:</label>
            <input type="email" placeholder="your@email.pl" />
            <label>Message:</label>
            <textarea placeholder="type the message content here"></textarea>
          </form>
        </div>
      </div>

      <div className="collab">
        <h2>Collaboration</h2>
        <p>m.kowalski@contact.com</p>
      </div>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.1683318676225!2d20.993764415798934!3d52.22967587975707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb5d37747ff5%3A0xf32c62c2756d2b6f!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sin!4v1719428227581!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;*/
// src/components/Contact.jsx
import React from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact</h1>
      </div>
      <div className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h2>Contact us</h2>
          <div className="contact-info">
            02–233 Warszawa
            <br />
            Al. Jerozolimskie 12
            <br />
            email@contact.com
            <br />
            +48 500 500 500
          </div>

          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>

          <div className="collab">
            <h2>Collaboration</h2>
            <p>m.kowalski@contact.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <form>
            <label>First name:</label>
            <input type="text" placeholder="Anna" />

            <label>Your e-mail:</label>
            <input type="email" placeholder="your@email.pl" />

            <label>Message:</label>
            <textarea placeholder="type the message content here"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.1683318676225!2d20.993764415798934!3d52.22967587975707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb5d37747ff5%3A0xf32c62c2756d2b6f!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sin!4v1719428227581!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
