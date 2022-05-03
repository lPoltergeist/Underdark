import styles from './styles.module.scss'
//import DarkMode from '../theme/changetheme'

import {BiMenuAltRight, BiWindows} from 'react-icons/bi'
import {MdOutlineClose} from 'react-icons/md'

import { useState } from 'react'
import { useEffect } from 'react';

import Logo from '../../../public/logo.svg'

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
setmenuOpen((p) => !p)
}



    return(
        <header className={styles.headerContainer}>
                <div className={styles.header}>
                <a href="/posts">
                <img className={styles.logoContent} src="/loooogo.png" alt="/logo.png"/>
                </a>
                <nav className={`${styles.navContent} ${menuOpen ? styles.isMenu : ""}`}>
               <ul>
                   <li>
                       <a href="/">Home</a>
                   </li>
                   <li>
                       <a href="/posts">Posts</a>
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