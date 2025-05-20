import React from 'react';
import { Link, Links } from 'react-router-dom';
import './css/Allstyle.css';
import './css/Contact.css';
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <header>
                <div className="top-bar">
                    <nav className="main-nav">
                        <ul>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/About'}>About</Link>
                            <li className="logo">Leafy<span>Life</span></li>
                            <Link to={'/Store'}>Store</Link>
                            <Link to={'/Contact'}>Contact</Link>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className='about-hero'>
            <div class="hero-center">
                    <h1>About Us</h1>
                </div>
            </div>

            <section className="contact-info">
        <div className="info-box">
          <span className="icon">📍</span>
          <h4>Address</h4>
          <p>Surat,Gujrat,India</p>
        </div>
        <div className="info-box">
          <span className="icon">📞</span>
          <h4>Phone</h4>
          <p>+91 9316011881<br />7984409978</p>
        </div>
        <div className="info-box">
          <span className="icon">📧</span>
          <h4>Email</h4>
          <p>Kananimeet46867@gmail.com<br /> </p>
        </div>
      </section>


       <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586791.5480843313!2d72.45087405263101!3d21.04803037497067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1747306383705!5m2!1sen!2sin"  
          width="100%"
          height="400"
          style={{ border: 0 }}
        ></iframe>
      </div>



      <section className="contact-form">
        <h2>Get In Touch</h2>
        
        <form>
          <div className="form-row">
            <input type="text" placeholder="Your name *" required />
            <input type="email" placeholder="Your email *" required />
            <input type="tel" placeholder="Telephone number *" required />
          </div>
          <textarea placeholder="Message *" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
        

        <footer className="footer">
                        <div className="footer-container">
                            <div className="footer-logo">
                                <h2>LeafyLife</h2>
                                <p>Inspiring innovation, every day.</p>
                            </div>
        
                            <div className="footer-links">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
        
                            <div className="footer-social">
                                <h4>Follow Us</h4>
                                <div className="social-icons">
                                    <a href="#"><FaFacebook size={40} /></a>
                                    <a href="#"><FaXTwitter size={40} color='white' /></a>
                                    <a href="#"><FaWhatsapp size={40} color='green' /></a>
                                </div>
                            </div>
                        </div>
        
                        <div className="footer-bottom">
                            <p>&copy; {new Date().getFullYear()} LeafyLife. Created by Meet Kanani</p>
                        </div>
                    </footer>
    </div>)
}

export default Contact
