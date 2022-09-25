import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <>
      <header className="headsection">
        <div className="inner-head">
          <span className="Bookstore-CMS Text-Style-5">
            Bookstore CMS
          </span>
          <nav className="lists">
            <a href="/Books" className="BOOKS Text-Style-3">
               BOOKS
            </a>
            <a href="/categories" className="CATEGORIES Text-Style-3">
               CATEGORIES
            </a>
          </nav>
        </div>
      </header>
    </>
  );
    export default Header;