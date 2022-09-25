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
            <Link to="/Books" className="BOOKS Text-Style-3">
               BOOKS
            </Link>
            <Link to="/categories" className="CATEGORIES Text-Style-3">
               CATEGORIES
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
    export default Header;