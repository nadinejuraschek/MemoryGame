import React from 'react';
import './Footer.css';

const currentYear = new Date().getFullYear();

const Footer = props => (
        <div className='footer'>
            <p>© { currentYear } <a href="http://nadinejuraschek.com/">Nadine Juraschek</a></p>
            <p>Icons by <a href="https://www.flaticon.com/">Flaticon</a> and <a href="https://www.freepik.com/">Freepik</a>.</p>
        </div>
);

export default Footer;