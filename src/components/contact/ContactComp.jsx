import React, { useContext } from 'react'
import { CvContext } from '../../shared/cv.context'
import './ContactComp.css';
const ContactComp = () => {
    const { data } = useContext(CvContext);
    const contact = data.contact;

    return (
        <div className='media'>
            <div className='icon'>
                <div className='icon__link'>
                    <a href={contact.linkedin}>
                        <img className='icon__link__img' src='./assets/linkedin-icon.svg' alt='Linkedin' />
                    </a>
                </div>
                <div className='icon__link'>
                    <a href={contact.gitHub}>
                        <img className='icon__link__git' src='./assets/github.svg' alt='github' />
                    </a>
                </div>
                <div className='icon__link'>
                    <a className='icon__link__txt' href="mailto:tonydeveloper92@gmail.com">
                        <img className='icon__link__img' src='./assets/gmail-logo-2561.svg' alt='gmail' />{contact.email}
                    </a>
                </div>
                <div className='icon__link'>
                    <a className='icon__link__txt' href='tel:+34622939625'>
                        <img className='icon__link__img' src='./assets/phone.svg' alt='phone' />{contact.phone}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactComp
