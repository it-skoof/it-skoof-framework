import {Link} from 'react-router-dom'
import logo from '../../atoms/assets/itSkoof.png'

import style from './header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
        <img src={logo}/>
        <nav>
            <Link to={'/projects'}>Проекты</Link>
            <Link to={'/about'}>Обо мне</Link>
        </nav>
    </header>
  )
}
