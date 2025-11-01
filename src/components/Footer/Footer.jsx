import React from 'react'
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram,FaYoutube} from "react-icons/fa";

const Footer = () => {
  const handleScroll=(sectionId)=>{
    const section=document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behaviour:"smooth"});
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto"
      
    </footer>
  )
}

export default Footer
