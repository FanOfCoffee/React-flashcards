import React, { useState } from 'react';
import Table from '../components/Table';
import PopUp from '../components/PopUp';
import '../assets/styles/Buttons.css'


function Home() {
    const [popUpOpen, setPopUpOpen] = useState(false)
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
        <div>
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
        </div>
            </>
    )
}

export default Home