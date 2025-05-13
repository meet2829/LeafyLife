import React from 'react';
import { Link, Links } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Link to={'/Home'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Store'}>Store</Link>
        <Link to={'/Contact'}>Contact</Link>
        <Link to={'/Blog'}>Blog</Link>
        
      
    </div>
  )
}

export default Navbar
