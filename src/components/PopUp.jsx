import React, { useState} from 'react'
import '../assets/styles/PopUp.css'

export default function PopUp({closePopUp, onSubmit, defaultValue}) {
    const [formState, setFormState] = useState(defaultValue || {
        word: '',
        pronunciation: '',
        k_word: '',
        category: ''
    });
    const handleReset = (e) => {
        e.preventDefault()
        setFormState(defaultValue || {
            word: '',
            pronunciation: '',
            k_word: '',
            category: ''
        })
    }

    


    const [errors, setErrors] = useState("")
    
    const validateForm = () => {
        let errorField = [];
        for(const [key, value] of Object.entries(formState)) {
            if(!value){
                errorField.push(key);
            }
        }

        const hasErrors = !!errorField.length

        setErrors(hasErrors ? errorField.join(", ") : "");
        return !hasErrors
    };



    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const handleSave = (e) => {
        e.preventDefault()
        if (!validateForm()) return;
        onSubmit(formState)

        closePopUp();
    }


    return (
        <div className='p-c'>
            <div className='popup-container' onClick={(e) => {
                if(e.target.className === 'popup-container') closePopUp()}}>
            <div className='popup'>
                <form>
                    <div className='form-popup'>
                        <label htmlFor="word">English</label>
                        <input name="word" value={formState.word} onChange={handleChange}/>
                    </div>
                    <div className='form-popup'>
                        <label htmlFor="pronunciation">Transcription</label>
                        <input name="pronunciation" value={formState.pronunciation} onChange={handleChange}/>
                    </div>
                    <div className='form-popup'>
                        <label htmlFor="k-word">Korean</label>
                        <input name="k_word" value={formState.k_word} onChange={handleChange}/>
                    </div>
                    <div className='form-popup'>
                        <label htmlFor="category">Category</label>
                        <input name="category" value={formState.category} onChange={handleChange}/>
                    </div>
                    {errors && <div className='error'>{`Пожалуйста, заполните: ${errors}`}</div>}
                    <div className='form-popup-btn'>

                        <button className='table-btn' onClick={() => closePopUp(true)}>Отмена</button>
                        <button className='table-btn' onClick={handleReset}>Возврат</button>
                        <button type='submit' className='popup-btn table-btn' onClick={handleSave}>Сохранить</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        
    )
    }
