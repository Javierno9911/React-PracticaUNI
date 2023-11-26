import React, { useState, useEffect } from 'react';
import Note from './Note';

function NoteList() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');

  const saveNotesToLocalStorage = (updatedNotes) => {
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    console.log(searchTerm);
    const searchOutputDiv = document.querySelector('.search-salida');
    if (searchOutputDiv) {
      searchOutputDiv.textContent = searchTerm;
    }
  };

  return (
    <div className="note-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar notas"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div className="search-salida">

      </div>
      {filteredNotes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={() => deleteNote(note.id)}
        />
      ))}
    </div>
  );
}

export default NoteList;