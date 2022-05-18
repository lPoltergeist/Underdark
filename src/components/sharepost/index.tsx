import React from 'react'
import { useRouter } from 'next/router';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
  
export default function SharePost(props) {
  const router = useRouter();
  console.log({basePath: router.basePath});

  return (
    <div>
      <h1>Social Share - GeeksforGeeks</h1>
      <TwitterShareButton
        url={router.basePath} >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <RedditShareButton
       url={props.url} >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton
         url={props.url} >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
         url={props.url} >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  )
}