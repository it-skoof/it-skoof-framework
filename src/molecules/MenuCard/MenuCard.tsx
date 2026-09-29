import { ReactNode, useRef } from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
import { useCardMove } from '@/atoms/lib/useCardMove'

type MenuCardProps = {
  title: string,
  desc: ReactNode
  to: string
}
export const MenuCard = ({title, desc, to} : MenuCardProps) => {
  const {ref, per, retu} = useCardMove()

  return (
    <Link to={to} ref={ref} className={style.card} onMouseMove={per} onMouseLeave={retu}>
        <svg version="1.1" xmlns='https://www.w3.org/svg/2000' viewBox='0 0 100 100' fill='red'>
            <filter id="fractalNoise">
              <feTurbulence 
                type={'fractalNoise'}
                baseFrequency="10" numOctaves="1"
                seed="1"
                result="fractalNoise"
              />
            </filter>
            <rect width="100%" height="100%" filter='url(#fractalNoise)'/>
        </svg>
        
        <span className={style.cardTitle}>{title}</span>
        <span className={style.cardDesc}>{desc}</span>
    </Link>
  )
}
