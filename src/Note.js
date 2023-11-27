import React from 'react';

function Note({ id, title, content, onDelete }) {
  return (
    <div className="note">
      <p className="note-id">ID: {id}</p>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
}

export default Note;