

import React from "react";
 import "./Footer.css"

 import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
 function Footer()  {
 
    return (
        <footer>
            
            <span >
                            <a  target="-blank"
                            href="https://redietgash21.github.io/Portifilo/">
                                <TbWorldWww/>
                            </a>
                        </span>
                    <span >
                                        <a  target="-blank"
                                        href="https://www.linkedin.com/in/rediet-gashaw/">
                                            <FaLinkedin/>
                                        </a>
                                    </span>
                        <span >
                                        <a  target="-blank"
                                        href="https://t.me/redietgash21">
                                            <FaTelegram/>
                                        </a>
                                    </span>
                        <span >
                                        <a  target="-blank"
                                        href="https://github.com/redietgash21">
                                            <FaGithub/>
                                        </a>
                                    </span>
                        <span >
                            <a  target="-blank"
                            href="https://mail.google.com/mail/u/0/#inbox">
                                <CgMail/>
                            </a>
                        </span>
                        <span >
                            <a  target="-blank"
                            href="#">
                                <FaPhoneAlt/>
                            </a>
                        </span>
                        <span >
                            <a  target="-blank"
                            href="#">
                                <FaTiktok/>
                            </a>
                        </span>
            
        </footer>
    
    )
  
}
export default Footer;