import React, {useState} from 'react'
import Flashcard from './Flashcard'
import '../styles/FlashCardSlider.css'


export default function FlashCardSlider({flashcards})  {
    const cards = flashcards.map((flashcard) => {
        return <Flashcard className='cardslide' flashcard={flashcard} key={flashcard.id} />;
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
}
