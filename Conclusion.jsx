import './Conclusion.css'
function Conclusion() {
    return (
        <div className='conclusion-page'>
            <div className='touch-top-banner'>
                <h1>Get in Touch</h1>
                <article>We're here to assist you with any questions or special requests. Contact our <br />dedicated team for personalized service.</article>
            </div>
            <section className="contact-figma">

                <div className="contact-wrapper">

                    <div className="contact-info">

                        <h2>Send Us Message</h2>
                        <p>
                            Feel free to reach out to us for bookings, inquiries,
                            or special requests. Our team is here to help.
                        </p>

                        <div className="info-row">
                            <div className="icon-circle">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <h4>Address</h4>
                                <span>123 Grand Avenue, Downtown</span>
                            </div>
                        </div>

                        <div className="info-row">
                            <div className="icon-circle">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <span>(555) 123-4567</span>
                            </div>
                        </div>

                        <div className="info-row">
                            <div className="icon-circle">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <span>info@grandhaven.com</span>
                            </div>
                        </div>

                    </div>

                    <div className="contact-right">

                        <form className="contact-form">
                            <div className="form-row">
                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Your Email" />
                            </div>

                            <input type="text" placeholder="Subject" />
                            <textarea placeholder="Your Message"></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className='follow-us-banner'>
                    <h1>Follow Us</h1>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <div className='last-cont-banner'>
                    <div className='lascont-desc'>
                        <h1>Find Us</h1>
                        <p>Located in the heart of the city with easy access to major attractions</p>
                    </div>
                    <div className="map-box">
                        <iframe
                            src="https://maps.google.com/maps?q=hotel&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            loading="lazy"
                        />
                        <a className="direction-btn">Get Direction</a>
                    </div>

                </div>
            </section>
             
    <footer className="footer-figma">

      <div className="footer-container">

        <div className="footer-col brand">
          <h2>The Grand Haven</h2>
          <p>
            Experience luxury redefined in the heart of the city.
            Your comfort is our commitment.
          </p>

          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Rooms & Suites</li>
            <li>Amenities</li>
            <li>Dining</li>
            <li>Events</li>
            <li>Special Offers</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Concierge</li>
            <li>Room Service</li>
            <li>Spa & Wellness</li>
            <li>Business Center</li>
            <li>Airport Shuttle</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Info</h4>
          <p><i className="fa-solid fa-location-dot"></i> 123 Grand Avenue, Downtown</p>
          <p><i className="fa-solid fa-phone"></i> (555) 123-4567</p>
          <p><i className="fa-solid fa-envelope"></i> info@grandhaven.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 The Grand Haven Hotel. All rights reserved.
      </div>

    </footer>
        </div>
    )
}
export default Conclusion