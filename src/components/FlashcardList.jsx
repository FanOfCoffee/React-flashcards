import React, { useState } from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList({flashcards}) {
  const [count, setCount] = useState(0);
  

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
    <div  className='card-grid'>
        {flashcards.map(flashcard => {
            return <Flashcard handleClick = {handleClick} flashcard = {flashcard} key={flashcard.id} />
        })}
    </div>
    <div className='counter'>
      Выучено {count}
    </div>
    </>
  )
}



