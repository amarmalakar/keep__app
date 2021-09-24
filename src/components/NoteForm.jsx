import React, { useState } from 'react'
import { data } from '../data'

const NoteForm = () => {
    const [form, setForm] = useState(false)
    const [handleNote, setHandleNote] = useState(true)

    const showForm = () => {
        setHandleNote(false)
        setForm(true)
    }
    const hideForm = () => {
        setHandleNote(true)
        setForm(false)
    }


    const [arrayData, setArrayData] = useState(data)

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const addData = () => {
        if (!note) {
            hideForm()
            return null;
        } else {
            arrayData.push(
                {
                    title,
                    note
                }
            )
            setTitle('')
            setNote('')
            hideForm()
        }
    }

    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [updateIdx, setUpdateIdx] = useState()
    const [updateTitle, setUpdateTitle] = useState()
    const [updateNote, setUpdateNote] = useState()
    const handleUpdateForm = (i) => {
        setUpdateIdx(i)
        setShowUpdateForm(true)

        setUpdateTitle(arrayData[i].title)
        setUpdateNote(arrayData[i].note)
    }

    const closeUpdate = () => setShowUpdateForm(false)

    const updateNoteHandler = (i) => {
        console.log(i);
        arrayData.splice(i, 1, { title: updateTitle, note: updateNote })
        setShowUpdateForm(false)
    }

    const deleteNoteHandler = (i) => {
        console.log(i);
        arrayData.splice(i, 1)
        setShowUpdateForm(false)
    }


    return (
        <>
            <div className="note__app--container">
                {handleNote ? <div className="note__form--first" onClick={ () => showForm() }>
                    Take a note...
                </div> : ''}

                {form ? <div className="note__form--wrapper">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                    <div className="textarea__div">
                        <textarea
                            placeholder="Take a note..."
                            value={note}
                            onChange={ (e) => setNote(e.target.value) }
                            autoFocus
                        ></textarea>
                    </div>

                    <div className="note__form--wrapper-btns">
                        <button onClick={ () => hideForm() }>Close</button>
                        <button onClick={ () => addData() }>Add</button>
                    </div>
                </div> : ''}


                <div className="note__list">
                    {arrayData.map((notes, i) => (
                        <div className="single__note" key={i} onClick={() => handleUpdateForm(i)}>
                            <div className="single__note--title">{notes.title}</div>
                            <div className="single__note--note">{notes.note}</div>
                        </div>
                    ))}
                </div>
            </div>

            
            {showUpdateForm ? <div className="full__page__overlay">
                <div className="note__form--wrapper">
                    <input
                        type="text"
                        placeholder="Title"
                        value={updateTitle}
                        onChange={ (e) => setUpdateTitle(e.target.value) }
                    />
                    <div className="textarea__div">
                        <textarea
                            placeholder="Take a note..."
                            value={updateNote}
                            onChange={ (e) => setUpdateNote(e.target.value) }
                            autoFocus
                        ></textarea>
                    </div>

                    <div className="note__form--wrapper-btns">
                        <button
                            style={{ color: 'orangered' }}
                            onClick={() => deleteNoteHandler(updateIdx)}
                        >Delete</button>
                        <button
                            style={{ color: 'green' }}
                            onClick={() => updateNoteHandler(updateIdx)}
                        >Update</button>
                        <button onClick={() => {closeUpdate()}}>Close</button>
                    </div>
                </div>
            </div> : ''}
            
        </>
    )
}

export default NoteForm
