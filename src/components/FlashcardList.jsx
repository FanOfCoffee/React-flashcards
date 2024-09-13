import React, { useState } from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList({flashcards}) {
  
  const [count, setCount] = useState(0);

  const tryClick = () => {
    setCount(count + 1);
  };
  return (
    <>
    <div  tryClick = {tryClick} className='card-grid'>
        {flashcards.map(flashcard => {
            return <Flashcard tryClick = {tryClick} flashcard = {flashcard} key={flashcard.id} />
        })}
    </div>
    <div className='counter'>
      Выучено {count}
    </div>
    </>
  )
}



