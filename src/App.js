import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [item, setItem] = useState('');

  const handleSignup = async () =>{
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User Registered")
    } catch (error){
      alert(error.message);
    }

  };

  const handleLogin = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User Logged in")
    } catch (error){
      alert(error.message);
    }
  };

  const handleAddItem = async () => {
    if (item) {
      await addDoc(collection(db, 'items'), {name: item});
      setItem('');
    }
  };
    

  return (
    <div>
      <h1>Firebase Add Data</h1>
      <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleSignup}>Sing Up</button>
      <button onClick={handleLogin}>Login</button>

      <h2>Add Item</h2>
      <input type='text' placeholder='add an items' value={item} onChange={(e) => setItem(e.target.value)}/>
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default App;