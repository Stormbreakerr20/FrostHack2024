export const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-push-4">
            <div className="footer-brand">
              <a className="logo" href="/">
                <img
                  className="logo-img"
                  src="./img/logos/wide.png"
                  alt="logo"
                />
              </a>
            </div>
            <div className="contact-social">
              <a
                target="_blank"
                href="https://www.facebook.com/frosthackiitmandi/"
                rel="noreferrer"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/kamandprompt/"
                rel="noreferrer"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
            <div className="centered-code">
              <a id="code_of_conduct" href="/code">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
