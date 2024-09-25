import React, { useState} from 'react';
import '../assets/styles/Buttons.css';

import FlashCardSlider from '../components/FlashCardSlider';
import words from '../words.json'

export default function OtherCards() {
    const [flashcards, setFlashcards] = useState(words)
    return (
        <>
            <FlashCardSlider flashcards={flashcards}/>
        </>
    )
    }