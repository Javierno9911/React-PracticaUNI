import React, { useState } from 'react';

function NoteEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [savedNotes, setSavedNotes] = useState([]); 

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, { title, content }]);
    setTitle('');
    setContent('');
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...savedNotes];
    newNotes.splice(index, 1);
    setSavedNotes(newNotes);
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
      <button onClick={handleSaveNote}>Guardar</button>
      <div className="saved-notes">
        <ul>
          {savedNotes.map((note, index) => (
            <li key={index}>
              <strong><h3>{note.title}</h3></strong> {note.content}
              <button className="boton-eliminar" onClick={() => handleDeleteNote(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NoteEditor;