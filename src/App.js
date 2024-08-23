import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/FlashcardApp.css';
import './App.css'
import './styles/Buttons.css'
import FlashcardList from './components/FlashcardList';
import Table from './components/Table';
import PopUp from './components/PopUp';
import FCL from './components/FCL';



function App() {
  const [popUpOpen, setPopUpOpen] = useState(false)
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  const [rows, setRows] = useState([
    //заглушка
    {
      word: 'Hello',
      pronunciation: 'annyeonghaseyo',
      k_word: '안녕하세요',
      category: 'General'
    },
    {
      word: 'Please',
      pronunciation: 'juseyo',
      k_word: '주세요',
      category: 'General'
    }
  ]);

  const [rowToChange, setRowToChange] = useState(null)

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex))
  }

  const handleChangeRow = (index) => {
    setRowToChange(index);
    setPopUpOpen(true);
  }

  const handleAdd = (newRow) => {
    rowToChange === null ? 
    setRows([...rows, newRow]):
    setRows(rows.map((currentRow, index) => {
      if(index !== rowToChange) return currentRow;
      return newRow;
    }))
  }

  const handleClosePopUp = () => {
    setPopUpOpen(false);
    setRowToChange(null);
  }

  return (
    <>
      <Header/>
      <div className='container'>
        <FlashcardList flashcards={flashcards} />
      </div>
        <Table rows={rows} 
          deleteRow = {handleDeleteRow}
          changeRow = {handleChangeRow}/>
      <div className='p-c'>
        <button className='add-btn' onClick={() => setPopUpOpen(true)}>Создать слово</button>
      </div>
        {popUpOpen && <PopUp closePopUp={handleClosePopUp} 
        onSubmit = {handleAdd}
        defaultValue = {rowToChange !== null && rows[rowToChange]}
        />}
        <FCL flashcards={flashcards}/>

      <div>
        <Footer/>
      </div>

    </>
  );
}
//заглушка
const SAMPLE_FLASHCARDS = [
  {
    word: 'Hello',
    pronunciation: '[annyeonghaseyo]',
    k_word: '안녕하세요'
  },
  {
    word: 'Please',
    pronunciation: '[juseyo]',
    k_word: '주세요'
  },
  {
    word: 'Sorry',
    pronunciation: '[joesonghamnida]',
    k_word: '죄송합니다'
  },
  {
    word: 'Thank You',
    pronunciation: '[gamsahamnida]',
    k_word: '감사합니다'
  }
]

export default App;
