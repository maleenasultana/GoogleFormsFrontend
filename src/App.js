import React from 'react';
import { SignIn } from './pages/signIn/SignIn';
import { SignUp } from './pages/signUp/SignUp';
import { FormHome } from './pages/formHome/FormHome';
import { FormCreate } from './pages/formCreate/FormCreate';
import { ViewForm } from './pages/viewForm/ViewForm';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />} ></Route>
        <Route path='/' element={<SignUp />} ></Route>
        <Route path='/forms/create/template/:templateName' element={<FormCreate/>}></Route>
        <Route path='/forms/create' element={<FormCreate/>}></Route>
        <Route path='/forms/edit/:formId' element={<FormCreate/>}></Route>
        <Route path='/forms' element={<FormHome />} ></Route>
        <Route path='/forms/fill/:formId/:action' element={<ViewForm />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;