import React from 'react';
import './App.css';
import {useState} from "react";
import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { SentimentVerySatisfiedOutlined } from '@mui/icons-material';

const initialValues={username:"",phoneNumber:"",gender:"NO INFO"}

function App() {
 const [info,setInfo]=useState(initialValues);

 const handleFormSubmit=(e)=>{
   e.preventDefault();
   console.log(info)
  //  addUser
 }

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
      <Contacts/>
    </div>
  );
}

export default App;