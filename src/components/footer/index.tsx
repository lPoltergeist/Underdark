import React from "react";
import  Link  from "next/link";

import styles from './styles.module.scss';


function Footer(partner) {
  return (
    <>
   <footer className={styles.footer}>
     
     <div className={styles.boxs}>
    <h2>Atalhos</h2>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="#">Topo</Link></li>
    </ul>
     </div>

     <div className={styles.boxs}>
     <h2>Colabore com o site</h2>
    <ul>
      <li><Link href="https://www.patreon.com/user?u=73684214&fan_landing=true">Patreon</Link></li>
      <li><Link href="">pix: 16569614746</Link></li>
    </ul>
       </div>
   </footer>
   
   </>
  );
}

export default Footer;
