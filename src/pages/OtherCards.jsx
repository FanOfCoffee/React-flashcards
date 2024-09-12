import React, { useState} from 'react'
import '../assets/styles/Buttons.css'

import FCL from '../components/FCL';
import FlashCardSlider from '../components/FlashCardSlider';

export default function OtherCards() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
    return (
        <>
            <FCL flashcards={flashcards}/>
            <FlashCardSlider flashcards={flashcards}/>
        </>
    )
    }

const SAMPLE_FLASHCARDS = [
    {
      id: 1,
      word: 'Hello',
      pronunciation: '[annyeonghaseyo]',
      k_word: '안녕하세요'
    },
    {
      id: 2,
      word: 'Please',
      pronunciation: '[juseyo]',
      k_word: '주세요'
    },
    {
      id: 3,
      word: 'Sorry',
      pronunciation: '[joesonghamnida]',
      k_word: '죄송합니다'
    },
    {
      id: 4,
      word: 'Thank You',
      pronunciation: '[gamsahamnida]',
      k_word: '감사합니다'
    }
  ]