import React, { CSSProperties } from 'react'
import { MdOutlineErrorOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const margin : CSSProperties = {marginTop: '1rem !important'};
export const ErrorFallback = ({message} : {message: string}) => {
  return (
    <div className='errFallback'>

        <MdOutlineErrorOutline fontSize={'4rem'} color='#eb3d3d'/>
        <h4>{message}</h4>
        <Link style={margin} className='primary-link' to={'/'}>На главную</Link>
    </div>
  )
}
