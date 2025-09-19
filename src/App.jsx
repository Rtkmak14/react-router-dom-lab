// src/App.jsx
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router';
import { useState } from 'react';

import NavBar from "./components/NavBar/NavBar"
import MailboxForm from "./components/MailboxForm/MailboxForm"
import MailboxList from "./components/MailboxList/MailboxList"
import MailboxDetails from "./components/MailboxDetails/MailboxDetails"

import "./index.css"

const App = () => {
  
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newBoxData) => {
  
      const newBox = {
      _id: mailboxes.length + 1,
      boxSize: newBoxData.boxSize,
      boxOwner: newBoxData.boxOwner
    }

    setMailboxes([...mailboxes, newBox]);
  }


console.log("App is rendering")

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>}/>
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}/>
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>}/>
    </Routes>
    </>
  )
}

export default App