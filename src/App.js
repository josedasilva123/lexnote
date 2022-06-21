import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Register from './pages/Register';
import Login from "./pages/Login";

function App() {
  const [login, setLogin] = useState(false); //Centralizador lógico

  const [notes, setNotes] = useState([]); 
  const [counter, setCounter] = useState(0);


  function addNotes(note){
    const newNote = {
      id: counter,
      title: note.title,
      text: note.text,
    }
    setNotes([...notes, newNote]);
    setCounter(counter + 1);
  }

  function removeNotes(id){
    const newNoteList = notes.filter((note) => note.id !== id);
    setNotes(newNoteList);
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<Login setLogin={setLogin} />} />
        <Route path="/dashboard" element={<Dashboard addNotes={addNotes} removeNotes={removeNotes} setLogin={setLogin} />} />
        <Route path="/register" element={<Register />}/>
      </Routes>
      
    </div>
  );
}

export default App;
