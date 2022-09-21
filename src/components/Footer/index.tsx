import './Footer.css';

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <p>
        © {currentYear} <a href='http://nadinepesso.com/'>Nadine Pesso</a>
      </p>
      <p>
        Icons by <a href='https://www.flaticon.com/'>Flaticon</a> and{' '}
        <a href='https://www.freepik.com/'>Freepik</a>.
      </p>
    </div>
  );
};
