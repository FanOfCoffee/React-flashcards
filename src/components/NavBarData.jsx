import React from 'react';
import * as FaIcons from "react-icons/fa";
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
        path: '/cards',
        icon: <IoIcons.IoIosCard/>,
        className: 'nav-text'
    },
    {
        title: 'Еще карточки',
        path: '/cards-again',
        icon: <IoIcons.IoMdCard/>,
        className: 'nav-text'
    },
]
