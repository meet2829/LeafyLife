import React from 'react';
import { Link, Links } from 'react-router-dom';
import './css/Allstyle.css';
import './css/About.css';
import plant from './img/image.png';
import group from './img/group.jpg';
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
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
                <img class="hero-img left" src={plant} alt="Framed snake plant" />
                <div class="hero-center">
                    <h1>About Us</h1>
                </div>
                <img class="hero-img right" src={plant} alt="Framed monstera leaf" />
            </div>

            <section class="about-section wrapper">
                <div class="about-text">
                    <h2>
                        <span>A&nbsp;Minimal Team</span><br />
                        For a Better World
                    </h2>
                    <p>
                        At our core, we are a small team with a big mission: to bring nature closer to everyday life. We believe in the power of plants to purify spaces, lift moods, and inspire sustainable living. Each leaf we nurture and every pot we ship is part of our commitment to a greener, more mindful world. Minimal in size but rooted in passion, our team is dedicated to helping you grow not just plants — but a better lifestyle.
                    </p>
                </div>

                <figure class="about-img">
                    <img src={group} alt="Succulents in white pots" />
                </figure>
            </section>


            <section class="stats wrapper">
                <div class="stat">
                    <span class="stat-number">229</span>
                    <span class="stat-label">Happy Clients</span>
                </div>
                <div class="stat">
                    <span class="stat-number">109</span>
                    <span class="stat-label">Completed Project</span>
                </div>
                <div class="stat">
                    <span class="stat-number">22</span>
                    <span class="stat-label">Awesome Staff</span>
                </div>
                <div class="stat">
                    <span class="stat-number">11</span>
                    <span class="stat-label">Winning Awards</span>
                </div>
            </section>


            <div class="process-container">
                <div class="process-step left">
                    <div class="step-label">Step 01</div>
                    <h4>Choose Your Products</h4>
                    <p>Start by exploring our wide selection of high-quality products tailored to your needs. Whether you're shopping for daily essentials, fresh groceries, or specialty items, you can browse, compare, and select your favorites with ease—all from the comfort of your home.</p>
                </div>

                <div class="process-step right">
                    <div class="step-label">Step 02</div>
                    <h4>Connect Nearest Store</h4>
                    <p>Once you've selected your products, we automatically connect you with the nearest available store to ensure quick and efficient service. This helps reduce delivery time, supports local businesses, and ensures your order is fulfilled with freshness and accuracy.</p>
                </div>

                <div class="process-step left">
                    <div class="step-label">Step 03</div>
                    <h4>Share Your Location</h4>
                    <p>To deliver your order quickly and accurately, simply share your current location. This helps us identify the closest store and streamline the delivery process—ensuring your products arrive at the right place, right on time.</p>
                </div>

                <div class="process-step right">
                    <div class="step-label">Step 04</div>
                    <h4>Get Delivered Fast</h4>
                    <p>Sit back and relax as your order is swiftly delivered right to your doorstep. With our optimized delivery network and nearby store partnerships, you’ll receive your products quickly—fresh, secure, and hassle-free.</p>
                </div>
            </div>


            <section className="team-section">
                <h2 className="section-title">Meet Our Team</h2>
                <div class="team-line"><span class="team-icon">✳️</span></div>

                <div className="team-container">
                    <div className="team-member">
                        <img src="https://htmlbeans.com/html/botanical/images/img84.jpg" alt="Kevin Lee"></img>
                        <h3>KEVIN LEE</h3>
                        <p>Art Director</p>
                    </div>
                </div>
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

export default About
