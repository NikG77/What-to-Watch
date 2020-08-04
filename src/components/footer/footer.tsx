import * as React from "react";
import Logo from "../logo/logo";

const CLASS_NAME_LOGO_LIGHT = `logo__link--light`;

const Footer = () => {

  return (
    <footer className="page-footer">
      <Logo className={CLASS_NAME_LOGO_LIGHT} />
      <div className="copyright">
        <p>© 2020 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
