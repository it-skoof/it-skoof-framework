import { MenuCard } from '@/molecules/MenuCard/MenuCard'


export const Project = () => {
  return (
    <>
        <div className='menu'>
            <MenuCard title='TYPER'
              to='/typer'
              desc={<>
                <p>Проект по проверке скорости печати</p>
            
              </>}/>
            <MenuCard title='MINIQUIZ' 
              to='/miniQuiz'
              desc={<>
                <p>Проект по проверке скорости печати</p>  
            </>}/>
            <MenuCard title='CHUTYE' 
              to='https://chutye.com/'
              desc={<>
                <p>Принимаю активное участие в разработке проекта</p>
            </>}/>
        </div>
    </>
  )
}
