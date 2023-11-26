// src/components/NoteEditor.js
import React, { useState } from 'react';

function NoteEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [savedNotes, setSavedNotes] = useState([]); // Nuevo estado para almacenar notas guardadas

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSaveNote = () => {
    // Guardar la nota en el estado de notas guardadas
    setSavedNotes([...savedNotes, { title, content }]);
    // Limpiar el título y el contenido después de guardar
    setTitle('');
    setContent('');
  };

  return (
    <div className="note-editor">
      <h2>INSERTAR NOTA</h2>
      <div className="titulo_nota">
        <input type="text" placeholder="Título" value={title} onChange={handleTitleChange} />
      </div>
      <div className="contenido_nota">
        <textarea placeholder="Contenido" value={content} onChange={handleContentChange} />   
      </div>
      <button onClick={handleSaveNote}>GUARDAR</button>
      <div className="saved-notes">
        <ul>
          {savedNotes.map((note, index) => (
            <li key={index}>
              <strong>{note.title}:</strong> {note.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NoteEditor;