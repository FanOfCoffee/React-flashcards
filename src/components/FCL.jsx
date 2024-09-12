import React, {useState} from 'react'
import Flashcard from './Flashcard'
import '../assets/styles/FCL.css'
import { BsArrowLeftCircleFill,  BsArrowRightCircleFill} from 'react-icons/bs';

export default function FCL({flashcards}) {
    /*const [slide, setSlide] = useState(0);

    const handleNext = () => {
        if(slide >= flashcards.length -1) return;
        setSlide(slide+1);

        //setSlide(slide === flashcards.length - 1 ? 0 :slide + 1);
    }
    const handlePrev = () => {
        if(slide === 0) return;
        setSlide(slide-1);
        //setSlide(slide === 0 ? flashcards.length-1 :slide - 1);
    }*/
    const [current, setCurrent] = useState(0);
    function previousCard() {
        setCurrent(current - 1);
    }
    function nextCard() {
        setCurrent(current + 1);
    }

  return (
    <div className='slider'> 
        <BsArrowLeftCircleFill onClick={previousCard} className='arrow arrow-left'/>
        {flashcards.map((flashcard, index) => {
            return <Flashcard 
            flashcard = {flashcard} 
            key={index}
            className={current === index ? 'card' : 'card-hidden'}
            />
        })}
        <BsArrowRightCircleFill onClick={nextCard} className='arrow arrow-right'/>
    </div>
  )
} 

/*
export default function FCL({flashcards})  {
    const cards = flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
    });

    const loading = <div className="loading">Loading flashcard content...</div>;

    const [current, setCurrent] = useState(0);
    function previousCard() {
        setCurrent(current - 1);
    }
    function nextCard() {
        setCurrent(current + 1);
    }
    
    return (
        <div className='slider'>
            {flashcards && flashcards.length > 0 ? (
            <div className="cardNumber">
                Flashcard {current + 1} of {flashcards.length}
            </div>
            ) : (
            ""
            )}
            {flashcards && flashcards.length > 0 ? cards[current] : loading}

            <div className="nav">
            {current > 0 ? (
                <button className="page-btn" onClick={previousCard}>Назад</button>
            ) : (
                <button className="disabled " disabled>
                Назад
                </button>
            )}
            {current < flashcards.length - 1 ? (
                <button сlassName="page-btn" onClick={nextCard}>Вперед</button>
            ) : (
                <button className="disabled" disabled>
                Вперед
                </button>
            )}
            </div>
        </div>
    );
}*/
