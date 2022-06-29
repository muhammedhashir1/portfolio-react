import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://instagram.com" target='blank'><AiFillInstagram/></a>
        <a href="https://github.com" target='blank'><AiFillGithub/></a>
        <a href="https://facebook.com" target='blank'><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocials