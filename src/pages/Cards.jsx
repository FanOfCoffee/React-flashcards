import React, {useState} from 'react'
import '../assets/styles/FlashcardApp.css';
import '../assets/styles/Buttons.css'
import FlashcardList from '../components/FlashcardList';
import words from '../words.json'


function Cards() {
    const [flashcards, setFlashcards] = useState(words)
    return (<>
      <div className='container'>
      <FlashcardList flashcards={flashcards} />
      </div>
      </>
    )
}

export default Cards

