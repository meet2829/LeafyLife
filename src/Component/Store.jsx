import React from 'react';
import { Link, Links } from 'react-router-dom';
import './css/Allstyle.css';
import Products from './Products';
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import './css/Store.css';
import PlantProduct from './PlantProduct';


const Store = () => {
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

        <div className='name'>
        <h1>Green & Fresh Plants</h1>
        <p>Beautify your space with our handpicked indoor and outdoor plants.</p>
      </div>

      
      <div className='new-product'>
        <h1> <u>....Featured Product....</u></h1>
        <Products />
      </div>

      


      <section className="product-section">
        <h2 className="section-title">Our Plants</h2>
        <PlantProduct />
        
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
          <p>&copy; {new Date().getFullYear()} LeafyLife.Created by Meet Kanani</p>
        </div>
      </footer>


    </div>)
}

export default Store
