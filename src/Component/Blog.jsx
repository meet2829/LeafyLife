import React from 'react';
import './css/Allstyle.css';
import { Link, Links } from 'react-router-dom';

const Blog = () => {
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
        </div>
    )
}

export default Blog
