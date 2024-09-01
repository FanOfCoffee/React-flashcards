import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
        <div>
            <img src="../assets/3814348.jpg" alt="Страница не найдена" />
            <Link to="/"> 
                <p>Вернуться на главную страницу</p>
            </Link>
        </div>
        </>
    )
}

export default NotFound