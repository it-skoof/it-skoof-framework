import React, { PropsWithChildren } from 'react'
import style from './page.module.scss'
import { Header } from '@/organisms/Header/Header'
import { Link, Outlet } from 'react-router-dom'
import {BsGithub, BsGitlab, BsTelegram} from 'react-icons/bs'
import { ShapeSvg } from '@/atoms/ShapeSvg'
export const PageTemplate = ({children} : PropsWithChildren) => {
  return (
    <div className={style.page}>
        <ShapeSvg/>
        <Header/>
        <main className={style.main}>
          <Outlet/>
        </main>
        <footer className={style.footer}>
            <Link to={'https://github.com/it-skoof'}><BsGithub/></Link>
            <Link to={'https://gitlab.com/chuck-chuckscript'}><BsGitlab/></Link>
            <Link to={'https://t.me/tipo_fatale'}><BsTelegram/></Link>
        </footer>
    </div>
  )
}
