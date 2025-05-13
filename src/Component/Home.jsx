import React from 'react'
import './css/Allstyle.css';
import './css/Homestyle.css';
import { Link, Links } from 'react-router-dom';
import plant from './img/image.png';
import certificate from './img/certificate.png'
import { RiPlantLine } from "react-icons/ri";
import { PiCloudSunLight } from "react-icons/pi";
import { SiCodefresh } from "react-icons/si";
import Products from './Products';
import { FaShippingFast } from "react-icons/fa";
import { TbGiftCard } from "react-icons/tb";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Carousel } from 'bootstrap';
import Banner from './Carousel';
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import crediblity from './img/credibliti.png';

const Home = () => {
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
                            <Link to={'/Blog'}>Blog</Link>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="hero">
                <div className="overlay-div"></div>

                <div className="hero-text">
                    <h1>Houseplant<span>The Perfect Choice.</span></h1>
                    <p>The snake plant (Sansevieria trifasciata), also known as mother-in-law's tongue, is a popular houseplant admired for its striking, upright leaves and its exceptional hardiness. Ideal for beginners, it thrives in a variety of light conditions, from low to bright indirect light, and requires minimal watering—only when the soil is completely dry. </p>
                    <a href="#" className="hero-btn">Shop Now →</a>
                    <div className="pagination">⟨ 1/3 ⟩</div>
                </div>

                <div className="hero-img">
                    <img src={plant} alt="plant" />
                </div>
            </section>
<div className="page-wrapper">
            <div className='middle'>

                <div className='Award-img'>
                    <img src={certificate} alt="certificate" style={{ height: 690 }} />
                </div>
                <div className='why-us'>
                    <h1><u >Why Choose US ?</u></h1>
                    <p className='text'>LeafyLife is more than just a brand — it’s a movement toward sustainable living and greener spaces. We are dedicated to bringing nature closer to you through beautifully curated houseplants, eco-friendly products, and mindful design. At LeafyLife, we believe that a greener home leads to a healthier life, and a healthier life contributes to a thriving planet. Every leaf we deliver is a step toward a more conscious, connected, and green tomorrow.</p>

                    <div className="features">
                        <div className="feature-item">
                        <RiPlantLine size={75} color='green'/>
                            <div>
                                <h3>Hand Planted</h3>
                                <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                        <PiCloudSunLight size={75} color='green'/>
                            <div>
                                <h3>Natural Sunlight</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                        <SiCodefresh size={75}color='green'/>
                            <div>
                                <h3>Clean Air</h3>
                                <p>There are many variations of passages of lorem ipsum available, but the majority have suffered.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div className='new-product'>
                <h1> <u>....Featured Product....</u></h1>
                <Products />
            </div>

            <div className='services'>
                <div className="shipping">
                    <FaShippingFast size={50}/>
                    <h2>Free Shipping Order</h2>
                    <p>On Order Above 799</p>
                </div>
                <div className="shipping">
                    <TbGiftCard size={50}/>
                    <h2>Special gift card</h2>
                    <p>The perfect gift idea</p>
                </div>
                <div className="shipping">
                    <MdOutlineCurrencyExchange size={50}/>
                    <h2>Return & exchange</h2>
                    <p>Free return within 3 days</p>
                </div>
                <div className="shipping">
                    <MdOutlineSupportAgent size={50}/>
                    <h2>Support 24 / 7</h2>
                    <p>Customer support</p>
                </div>
            </div>
</div>
            



    
            <div className='banner'>
            <Banner />
            </div>

            <div className='credibility'>
            <marquee scrollamount="20"><img src={crediblity} style={{height:300}}></img></marquee>
            </div>

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
            <a href="#"><FaFacebook size={40}/></a>
            <a href="#"><FaXTwitter size={40} color='white'/></a>
            <a href="#"><FaWhatsapp size={40} color='green'/></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LeafyLife. All rights reserved.</p>
      </div>
    </footer>
   
        </div>)
}

export default Home
