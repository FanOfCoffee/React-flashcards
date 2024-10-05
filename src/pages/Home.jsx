import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import PopUp from '../components/PopUp';
import AddWordForm from '../components/AddWordForm';
import '../assets/styles/Buttons.css';
import words from '../words.json';
import wordStore from '../stores/WordStore';
import { observer } from 'mobx-react-lite';

const Home = observer(() => {
    const [popUpOpen, setPopUpOpen] = useState(false);
    const [rowToChange, setRowToChange] = useState(null);

    useEffect(() => {

        wordStore.setWords(words);
    }, []);

    const handleDeleteRow = (targetIndex) => {
        wordStore.deleteWord(targetIndex);
    };

    const handleChangeRow = (index) => {
        setRowToChange(index);
        setPopUpOpen(true);
    };

    const handleAdd = (newRow) => {
        if (rowToChange === null) {
            wordStore.addWord(newRow);
        } else {
            wordStore.updateWord(rowToChange, newRow);
        }
    };

    const handleClosePopUp = () => {
        setPopUpOpen(false);
        setRowToChange(null);
    };

    return (
        <>
        <AddWordForm/>
            <div>
                <Table 
                    rows={wordStore.words} 
                    deleteRow={handleDeleteRow} 
                    changeRow={handleChangeRow} 
                />
                <div className='p-c'>
                    <button className='add-btn' onClick={() => setPopUpOpen(true)}>Создать слово</button>
                </div>
                {popUpOpen && 
                    <PopUp 
                        closePopUp={handleClosePopUp} 
                        onSubmit={handleAdd} 
                        defaultValue={rowToChange !== null && wordStore.words[rowToChange]} 
                    />}
            </div>
        </>
    );
});

export default Home;