const Footer = () => {
  return (
      <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Deezer Clone App. All rights reserved.</p>
          <div className="footer-links">
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy Policy</a>
          </div>
      </footer>
  );
};

export default Footer;