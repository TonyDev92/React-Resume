import React, { useContext } from 'react'
import Header from '../../core/header/Header'
import { CvContext } from '../../shared/cv.context'
import './About.css';

const About = () => {
  const { data } = useContext(CvContext);
  const about = data.aboutMe;

  return (
    <div>
      <Header/>
      <section className='abt'>
        <article className='content'>
          <div className='content__img'>
            <img className='content__img__active' src='./assets/_Y3A1759.jpg' alt='abt'/>
          </div>
          <div className='content__txt'>
            <p className='content__txt__in'>{about}</p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default About
