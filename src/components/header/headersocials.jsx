import React from "react";
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'


const headersocials = () => {
  return (
    <div className="header__socials">
      <a href="https://twitter.com/ja10th" target="_blank"><BsTwitter/></a>
      <a href="https://github.com/ja10th" target="_blank"><BsGithub/></a>
      <a href="https://facebook.com/ja10th" target="_blank"><BsFacebook /></a>
    </div>
  );
};

export default headersocials;
