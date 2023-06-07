import React, { useContext } from 'react'
import Header from '../../core/header/Header'
import { CvContext } from '../../shared/cv.context'
import './Education.css';
const Education = () => {
  const { data } = useContext(CvContext);
  const education = data.education;
  const technologie = data.technologies;
  return (
    <div>
      <Header />
      <section className='training'>
        <article className='courses'>
        <h5 className='courses__title'>Formación y Cursos</h5>
        <div className='courses__content'>
          {education.map((e, index) =>
            <div className='courses__content__card' key={index}>
              <h5>{e.qualification}</h5>
              <h5>{e.school}</h5>
              <h5>{e.hours}</h5>
              <h5>{e.date}</h5>
            </div>)}
        </div>
        </article>
        <aside className='tech'>
          <h4 className='tech__title'>Perfil Técnico</h4>
          <div className='tech__content'>
            {technologie.map((e, index) => 
            <div className='tech__content__card' key={index}>
            <img className='tech__content__img' src={e.url} alt='tech'></img>
            </div>)}
          </div>
        </aside>
      </section>
    </div>
  )
}

export default Education
