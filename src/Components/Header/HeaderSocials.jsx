import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.instagram.com/muhammed_hashir___/" target='blank'><AiFillInstagram/></a>
        <a href="https://github.com/muhammedhashir1" target='blank'><AiFillGithub/></a>
        <a href="https://m.facebook.com/hashir.aachi.54" target='blank'><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocials