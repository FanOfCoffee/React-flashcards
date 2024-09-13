import React, { useState , useEffect } from 'react';
import Table from '../components/Table';
import PopUp from '../components/PopUp';
import '../assets/styles/Buttons.css';
import words from '../words.json'


function Test() {
    const [popUpOpen, setPopUpOpen] = useState(false)
    const [rows, setRows] = useState([]);
    useEffect(() =>{
        setRows(words);
    })
    const [rowToChange, setRowToChange] = useState(null)
    const handleDeleteRow = (id) => {
        const newRow = rows.filter((row) => row.id !==id);
        setRows(newRow);
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

export default Test