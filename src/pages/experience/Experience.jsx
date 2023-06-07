import React, { useContext } from 'react'
import Header from '../../core/header/Header'
import { CvContext } from '../../shared/cv.context'
import './Experience.css';
const Experience = () => {
  const { data } = useContext(CvContext);
  const experience = data.experience;

  return (
    <div>
        <Header/>
        <section className='exp'>
          <article className='experience'>
            { experience.map((e, index) => 
            <div key={index} className='experience__card'>
              <h5 className='experience__card__in'>{e.ocupation}</h5>
              <h5 className='experience__card__in'>{e.company}</h5>
              <h5 className='experience__card__in'>{e.date}</h5>
              <h5 className='experience__card__in'>{e.description}</h5>
              <h5 className='experience__card__in'>{e.skills}</h5>
            </div>)}
          </article>
        </section>
    </div>
  )
}

export default Experience
