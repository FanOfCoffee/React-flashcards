import React from 'react'
import '../styles/Table.css'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'

export default function Table({rows, deleteRow, changeRow}) {
    return (
        <div className='table-wrapper'>
            <table className='table'>
                <thead>
                    <tr>
                        <th >English</th>
                        <th >Transcription</th>
                        <th >Korean</th>
                        <th >Category</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => {
                        const wordText = row.word.charAt(0).toUpperCase() + row.word.slice(1);
                        const categoryText = row.category.charAt(0).toUpperCase() + row.category.slice(1);
                        return (<tr key={index}>
                                <td>{wordText}</td>
                                <td>[{row.pronunciation}]</td>
                                <td>{row.k_word}</td>
                                <td>{categoryText}</td>
                                <td>
                                    <span className='actions'>
                                        <BsFillPencilFill className='change-btn' onClick={() => changeRow(index)}/>
                                        <BsFillTrashFill className='delete-btn' onClick={() => deleteRow(index)}/>
                                    </span>
                        </td>
                            </tr>) 
                        })}
                </tbody>
            </table>
        </div>
    )
}
