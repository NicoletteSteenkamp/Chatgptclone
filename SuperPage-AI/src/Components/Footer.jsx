import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <p>SuperPage Chat V1.2</p>
      <p>
        This project was coded by Nicolette Steenkamp, open-source code is on{' '}
        <a
          href="https://github.com/NicoletteSteenkamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        and deployed on{' '}
        <a
          href="https://render.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Render
        </a>.
      </p>
    </footer>
  );
}

export default Footer;
