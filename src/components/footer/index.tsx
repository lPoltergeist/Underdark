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

       <div className={styles.boxs}>
         <h2>Sobre</h2>
         <p>
          Underdark é um site sobre RPG para fãs de RPG. Nosso objetivo é compartilhar nosso gosto com todos que tem interesse no tema. 
          Planejamos manter o site em constante evolução, para trazer matérias de melhor qualidade e novas features. 
         </p>
          </div>
   </footer>
   
   </>
  );
}

export default Footer;
