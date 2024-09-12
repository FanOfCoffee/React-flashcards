import React, { useState } from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList({flashcards}) {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count +1);
  }
  return (
    <>
    <div  onClick = {incrementCount} className='card-grid'>
        {flashcards.map(flashcard => {
            return <Flashcard  flashcard = {flashcard} key={flashcard.id} />
        })}
    </div>
    <div className='counter'>
      Выучено {count}
    </div>
    </>
  )
}
