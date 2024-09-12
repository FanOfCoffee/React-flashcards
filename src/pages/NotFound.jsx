import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/img/404error.png';
import '../assets/styles/Buttons.css';
import '../assets/styles/NotFound.css'

function NotFound() {
    return (
        <>
        <div className='not-found'>
            <img className='pic' src={pic} alt="Страница не найдена" />
            <Link to="/"> 
            <button className='page-btn to-main'>Вернуться на главную страницу</button>

            </Link>
        </div>
        </>
    )
}

export default NotFound