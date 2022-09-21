import './Footer.css';

const currentYear = new Date().getFullYear();

export const Footer = () => (
    <div className='footer'>
        <p>© { currentYear } <a href="http://nadinepesso.com/">Nadine Pesso</a></p>
        <p>Icons by <a href="https://www.flaticon.com/">Flaticon</a> and <a href="https://www.freepik.com/">Freepik</a>.</p>
    </div>
);
