// src/components/App.js
import React from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import './App.css'; // Importa el archivo de estilos

function App() {
  return (
    <div className="app">
      <div className="app-busqueda">
        <h2>APLICACION NOTAS</h2>
        <NoteList />
      </div>
      <div className="app-crear">
      <NoteEditor />
      </div>
    </div>
  );
}

export default App;