import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './icons';
import{motion} from "framer-motion";



//creating components for links 
const CustomLink = ({ href, title, className = "" }) => {
    const router=useRouter();
    console.log;

    return (
        //this link is parent element of span
      <Link href={href} className={`${className} relative group`}>
        {title}
        {/* for underline  */}
        <span className={
            `h-[1px] inline-block w-full bg-dark  
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300  
             ${router.asPath===href? 'w-full':'w=0'}
        `}> &nbsp;
        </span>
      </Link>
    );
  };
const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4'/>
        <CustomLink href="/projects" title="Projects" className='mx-4'/>
        <CustomLink href="/articles" title="Articles" className='ml-4'/>
        
      </nav>
  
      
      <nav className='flex items-center justify-center flex-wrap'>
      {/* <Logo/> */}
        <motion.a href="https://twitter.com" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mx-3'
        >
          <GithubIcon/></motion.a>
        <motion.a href= "https://twitter.com"target={"_blank"}
        className='w-6 mx-3'
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        ><TwitterIcon/></motion.a>
        <motion.a href="https://twitter.com" target={"_blank"} className='w-6 mx-3'
         whileHover={{y:-2}}
         whileTap={{scale:0.9}}
        ><LinkedInIcon/></motion.a>
        <motion.a href="https://twitter.com" target={"_blank"}
         className='w-6 mx-3'
         whileHover={{y:-2}}
         whileTap={{scale:0.9}}
         
         ><PinterestIcon/></motion.a>
        <motion.a href="https://twitter.com"arget={"_blank"} 
        className='w-6 mx-3'
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        ><DribbbleIcon/></motion.a>
    

       
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%'>
        <Logo/>
      </div>
    </header>
  );
};

export default Navbar;
