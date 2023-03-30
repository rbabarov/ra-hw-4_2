import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form/Form';
import List from './components/List/List';
import './Steps.css';

const INITIAL_NOTES = [
  { id: nanoid(), date: '2000-01-01', km: 300 },
  { id: nanoid(), date: '2001-11-15', km: 400 },
];

export default function Steps() {

  const [notes, setNotes] = useState(INITIAL_NOTES);

  const handleAddNote = (newNote) => {
    const indexOfDate = notes.findIndex((item) => item.date === newNote.date);
    if (indexOfDate === -1) {
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } else {
      setNotes((prevNotes) => {
        const newNotes = [...prevNotes];
        newNotes[indexOfDate].km += newNote.km;
        return newNotes;
      });
    }
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Учёт тренировок</h1>
      </header>
      <Form onSubmit={handleAddNote} />
      <List notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}
