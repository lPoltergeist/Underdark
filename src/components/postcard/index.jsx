import Image from 'next/image'
import React from 'react'

import styles from './styles.module.scss'

function Card(props) {
  return (
   <div className={styles.card} data-aos="flip-left">
       <div className={styles.card__body}>
           <Image src={props.img} alt={props.alt} className={styles.card__image} width='270px' height='160px'/>
           <h2 className={styles.card__title}>{props.title}</h2>
           <time className={styles.card__time}>{props.time}</time> 
           <p className={styles.card__description}>{props.description}</p>
       </div>
       <button className={styles.card__btn}>
           Ler post
       </button>
   </div>
  )
}

export default Card