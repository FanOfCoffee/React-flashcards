import React, { useState} from 'react';
import '../assets/styles/Buttons.css';
import FCL from '../components/FCL';
import FlashCardSlider from '../components/FlashCardSlider';
import words from '../words.json'

export default function OtherCards() {
    const [flashcards, setFlashcards] = useState(words)
    return (
        <>
            <FCL flashcards={flashcards}/>
            <FlashCardSlider flashcards={flashcards}/>
        </>
    )
    }