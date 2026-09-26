import { ShapeSvg } from '@/atoms/ShapeSvg';
import style from './about.module.scss'
import { IoLocationOutline } from "react-icons/io5";
import { useCardMove } from '@/atoms/useCardMove';




const ul = [
    'JavaScript', 
    'React', 'TypeScript', 
    'SCSS', 'HTML', 'CSS', 
    'Redux | Zustand | Mobx', 
    'Node.js', 'REST API', 'AI AGENTS', 'Git', 'Docker', 'Webpack | Vite'
]
export const About = () => {
  const {ref, per, retu} = useCardMove()
  return (
    <section ref={ref} onMouseMove={per} onMouseLeave={retu} className={style.about}>
        <ShapeSvg/>
        <div className={style.aboutText}>
            <h1>ОБО МНЕ</h1>
            <p>Привет! Я React-разработчик, который любит превращать идеи в простые и удобные продукты.
               <br/>
               <br/>
               Пишу код, создаю интерфейсы и постоянно изучаю что-то новое. Мне нравится делать вещи, которыми
               действительно пользуются

            </p>
        </div>
        <div className={style.aboutStack}>
            <div>
                <h3>СТЕК</h3>
                <ul>
                    {ul.map((liEl, key) => <li key={key}>{liEl}</li>)}
                </ul>
            </div>

        
            <div>
                <h3>ГДЕ Я</h3>
                <p className={style.location}><IoLocationOutline/> <span>MOSCOW, RUSSIA</span></p>
            </div>
           
        </div>
        
    </section>
  )
}
