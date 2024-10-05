import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import wordStore from '../stores/WordStore';
import '../assets/styles/AddWordForm.css'

const AddWordForm = observer(() => {
    const [english, setEnglish] = useState('');
    const [transcription, setTranscription] = useState('');
    const [korean, setKorean] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!english || !transcription || !korean || !category) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        const newWord = {
            word: english,
            pronunciation: transcription,
            k_word: korean,
            category: category,
        };

        try {
            wordStore.addWord(newWord);
            setEnglish('');
            setTranscription('');
            setKorean('');
            setCategory('');
        } catch (error) {
            console.error('Ошибка при добавлении слова:', error);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Добавить новое слово</h2>
            <form onSubmit={handleSubmit} className="add-word-form">
                <input 
                    type="text" 
                    placeholder="English" 
                    value={english} 
                    onChange={(e) => setEnglish(e.target.value)} 
                    className="form-input"
                />
                <input 
                    type="text" 
                    placeholder="Transcription" 
                    value={transcription} 
                    onChange={(e) => setTranscription(e.target.value)} 
                    className="form-input"
                />
                <input 
                    type="text" 
                    placeholder="Korean" 
                    value={korean} 
                    onChange={(e) => setKorean(e.target.value)} 
                    className="form-input"
                />
                <input 
                    type="text" 
                    placeholder="Category" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    className="form-input"
                />
                <button type="submit" className="page-btn">Сохранить</button>
            </form>
        </div>
    );
});

export default AddWordForm;