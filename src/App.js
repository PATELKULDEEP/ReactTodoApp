import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl,InputLabel, Input } from '@material-ui/core';
import './App.css';
import db from "./firebase";
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

//when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    //this code here... fires when the app.js loads
   db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
   })
  }, [input]);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();   //will stop the REFRESH
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('');  //clear up the input after clicking add todo button
  }

  return (
    <div className="App">
        <h1>Hello Kuldeep 🚀</h1>


        <form>
        
        <FormControl>
          <InputLabel htmlFor="my-input">Write a Todo</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button type="submit" onClick={addTodo} disabled={!input} variant="contained" color="primary">
          Add Todo
        </Button>
  
        </form>

        <ul>
          {todos.map(todo => (
            <Todo todo={todo} />
          ))}
        </ul>
    </div>
  );
}

export default App;
