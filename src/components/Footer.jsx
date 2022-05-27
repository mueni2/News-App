import React from 'react'
import {BiCopyright} from 'react-icons/bi'

const Footer = ({footerDate}) => {
  
  return (
    <footer>
      <span><BiCopyright/></span>
      <p>{footerDate.current} Anne Musyoki</p>
    </footer>
  )
}

export default Footer