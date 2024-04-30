import { useState } from 'react';
import './App.css';
import getLocation from './utils/getLocation'

function App() {
  const [noteField, setNoteField] = useState('');
  const [notes, setNotes] = useState([]);

  async function addNote() {
    let location = {};
    location = await getLocation();
    setNotes([...notes, { date: Date(), text: noteField, location: location, audio: '', video: '' }]);
    setNoteField('');
  }

  return (
    <>
      <h1>Notes</h1>
      <div className='notes'>
        {notes.slice().reverse().map((note, index) => (
          <div key={index} className='note'>
            <h3 className='date'>
              {note.date}
            </h3>
            <p>{note.text}</p>
            <div className='location'>
              {note.location ? <a href={note.location.href}>{note.location.text}</a>
              : note.location.text}
            </div>
          </div>
        ))}
      </div>
      <div className='add-note'>
        <input className='input' placeholder='Input a note...' minLength='' maxLength='100'
        value={noteField} onChange={(e) => setNoteField(e.target.value)}></input>
        <button className='button' onClick={addNote}>Add note</button>
      </div>
    </>
  );
}

export default App;
