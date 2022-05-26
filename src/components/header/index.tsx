import styles from './styles.module.scss'
//import DarkMode from '../theme/changetheme'

import {BiMenuAltRight, BiWindows} from 'react-icons/bi'
import {MdOutlineClose} from 'react-icons/md'

import { useState } from 'react'
import { useEffect } from 'react';

import logo from '../../../public/logo.png'
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
const [menuOpen, setmenuOpen] = useState(false);
const [size, setSize] = useState({
    width: undefined,
    height: undefined,
});

useEffect(() => {
    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

}, []);

useEffect(() => {
    if( size.width > 768 && menuOpen) {
        setmenuOpen(false);
    }
}, [size.width, menuOpen]);

const menuToggleHandler = () => {
setmenuOpen((p) => !p);
}

const handleCloseMenuOnClick = () => {
    setmenuOpen(false);
}



    return(
        <header className={styles.headerContainer}>
                <div className={styles.header}>
                <Link href="/posts">
                <Image className={styles.logoContent} src={logo} alt="/Underdark"   width='210px' height='200px'/>
                </Link>
                <nav className={`${styles.navContent} ${menuOpen ? styles.isMenu : ""}`}>
               <ul>
                   <li>
                       <Link href="/">
                          <a onClick={handleCloseMenuOnClick}>
                              Home
                          </a> 
                           </Link>
                   </li>
                   <li>
                       <Link prefetch href="/posts">
                           <a onClick={handleCloseMenuOnClick}> 
                           Posts
                           </a>
                           </Link>
                   </li>
                   <li>   
                   </li>
               </ul>
                </nav>
                <div className={styles.headerContentToggle}>
                   {menuOpen ?  <MdOutlineClose onClick={menuToggleHandler}/>  : <BiMenuAltRight onClick={menuToggleHandler}/>} 
                </div>
            </div>
        </header>
    )
}