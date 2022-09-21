import './Footer.css';

import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => (
    <div className='footer'>
        <p>© { currentYear } <a href="http://nadinejuraschek.com/">Nadine Pesso</a></p>
        <p>Icons by <a href="https://www.flaticon.com/">Flaticon</a> and <a href="https://www.freepik.com/">Freepik</a>.</p>
    </div>
);

export default Footer;