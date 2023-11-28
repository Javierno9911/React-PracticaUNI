import React from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-busqueda">
        <h2>BUSCADOR NOTAS</h2>
        <NoteList />
      </div>
      <div className="app-crear">
      <NoteEditor />
      </div>
    </div>
  );
}

export default App;