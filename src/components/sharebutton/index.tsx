import React from 'react'
import styles from './styles.module.scss'

import { TwitterShareButton,  WhatsappShareButton, FacebookShareButton, TelegramShareButton} from "next-share";
import { TwitterLogo, WhatsappLogo, FacebookLogo, TelegramLogo} from "phosphor-react";

type Share = {
slug: string,
title: string,
}

function ShareButton(props: Share) {
  return (
    <div className={styles.socialMediaLogos}>
    <TwitterShareButton 
     url={`underdark.online/posts/${props.slug}`}
      title={props.title}>
         <TwitterLogo size={45}  color="#31312e" weight="regular" className={styles.logos} />
   </TwitterShareButton>
   <WhatsappShareButton className={styles.logos}
      url={`underdark.online/posts/${props.slug}`}
      title={props.title} >
     <WhatsappLogo size={45} color="#31312e" weight="regular" className={styles.logos}/>
   </WhatsappShareButton>
   <FacebookShareButton
     url={`underdark.online/posts/${props.slug}`}
      title={props.title}> 
          <FacebookLogo size={45} color="#31312e" weight="regular" className={styles.logos}/>
          </FacebookShareButton>
          <TelegramShareButton
     url={`underdark.online/posts/${props.slug}`}

      title={props.title}>
          <TelegramLogo size={45} color="#31312e" weight="regular" className={styles.logos}/>
          </TelegramShareButton>
    </div>
  )
}

export default ShareButton