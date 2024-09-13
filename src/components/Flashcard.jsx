import React, { useState, useRef } from 'react';
//import { useEffect } from 'react';
import '../assets/styles/Flashcard.css';

export default function Flashcard({flashcard}, props) {
    const [flip, setFlip] = useState(false)
    
    const frontEl = useRef()
    const backEl = useRef()


    /*Если будет не одно слово, а фраза или предложение
    const[height, setHeight] = useState('initial')
    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight,backHeight, 100))
    }
    useEffect(setMaxHeight, flashcard)  
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize',setMaxHeight)
    }, [])
*/
    return (
        <div 
        className={`card ${flip ? 'flip' : ''}`}
        //style={{height : height }}
        onClick={() => setFlip(!flip)}>
            <div className='front' ref={frontEl}>
                {flashcard.word}
                <button onClick={props.tryClick} className='page-btn'>Перевод</button>
            </div>
            <div className='back' ref={backEl}>
                <div className='f-pronunciation'>
                    {flashcard.pronunciation}
                </div>
                {flashcard.k_word}
            </div>
        </div>
    )
}
