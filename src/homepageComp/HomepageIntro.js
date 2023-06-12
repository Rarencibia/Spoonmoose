import React from 'react'
import working from "../images/working.jpeg";

export default function HomepageIntro() {
  return (
    <div className='homepage-intro-wrapper'>
        <div className='intro-p'>
            <p>Welcome to Doesthislooknormal, where everything is made spooky or for fun. We handcraft our products
            and we are a family owned business. We take pride in creating the most zany and wild items
            our minds can imagine. We love to make you laugh and take pride in being able to bring you 
            custom merchandise that you won't find anywhere else!
            </p>
        </div>
        <div className='divider'>

        </div>
        <div className='intro-picture-container'>
            <img src={working} className="test" />
        </div>
    </div>
  )
}
