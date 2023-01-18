import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

function Footer() {
  return (
    <div className="footer-container">
      <p>© 2023 Dinwebdev -  For learning Next.js purposes</p>
      <p className="icons">
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
    </div>
  );
}

export default Footer;
/*
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 JSM Headphones All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
*/