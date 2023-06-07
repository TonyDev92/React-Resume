import React, { useContext } from 'react'
import Header from '../../core/header/Header'
import ContactComp from '../../components/contact/ContactComp'
import { CvContext } from '../../shared/cv.context'
import './Home.css';



const Home = () => {
    const { data } = useContext(CvContext)
    const descripcion = data.professionalProfile;
    const languages = data.languages;
    return (
        <div className='home'>
            <Header />
            <section className='container'>
                <div className='container__img'>
                    <img className='container__img__active' src='./assets/_Y3A1749.jpg' alt='homePic'></img>
                </div>
            </section>
            <section className='contact'>
                <article className='profile'>
                    <h1 className='profile__title'>Antonio M. Quintana Carrasco</h1>
                    <h2 className='profile__title'>Full Stack Developer</h2>
                    <h4 className='profile__title__pf'>Perfil Profesional</h4>
                    <p className='profile__title__ds'>{descripcion}</p>
                </article>
                <aside className='lang'>
                    <h5 className='lang__title'>Idiomas</h5>
                    {languages.map((e, index) => 
                    <div className='lang__card' key={index}>
                        <h4 className='lang__card__active'>{e.en}</h4>
                        <h4 className='lang__card__active'>{e.es}</h4>
                        <h4 className='lang__card__active'>{e.ja}</h4>
                    </div>)}
                </aside>
                <article className='social'>
                    <h3 className='social__title'>Contact</h3>
                    <ContactComp></ContactComp>
                </article>
            </section>
        </div>
    )
}

export default Home
