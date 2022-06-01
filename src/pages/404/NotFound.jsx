import React from 'react'
import { useTitle } from '../../hooks/useTitle'
import "./NotFound.css"
export  function NotFound() {
  useTitle("404")
  return (
    <div className='not-found'>
    <img src='https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png' width="500px" height="100%" alt='not-found'/></div>
  )
}
