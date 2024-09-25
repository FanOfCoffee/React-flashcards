import React, { useState } from 'react';
import Flashcard from './Flashcard';
import '../assets/styles/FlashCardSlider.css';

export default function FlashCardSlider({ flashcards }) {
    const [current, setCurrent] = useState(0);

    const cards = flashcards.map((flashcard) => (
        <Flashcard className='cardslide' flashcard={flashcard} key={flashcard.id} />
    ));

    const loading = <div className="loading">Loading flashcard content...</div>;

    function previousCard() {
        setCurrent((prev) => (prev === 0 ? flashcards.length - 1 : prev - 1));
    }

    function nextCard() {
        setCurrent((prev) => (prev === flashcards.length - 1 ? 0 : prev + 1));
    }

    return (
        <div className='slider'>
            {flashcards && flashcards.length > 0 ? (
                <div className="cardNumber">
                    Карточка {current + 1} из {flashcards.length}
                </div>
            ) : (
                ""
            )}
            <div className="card-container">
                {flashcards && flashcards.length > 0 ? cards[current] : loading}
            </div>
            <div className="nav">
                <button className="page-btn" onClick={previousCard}>Назад</button>
                <button className="page-btn" onClick={nextCard}>Вперед</button>
            </div>
        </div>
    );
}
