import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavBarData = [
    {
        title: 'Домой',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text'
    },
    {
        title: 'Карточки',
        path: '/game',
        icon: <IoIcons.IoIosCard/>,
        className: 'nav-text'
    },
    {
        title: 'Еще карточки',
        path: '/cards',
        icon: <IoIcons.IoMdCard/>,
        className: 'nav-text'
    },
]
