import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout';
import ClientLayout from './layouts/ClientLayout';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<ClientLayout />} />
      </Routes>
      
      <Routes>
        <Route path='/admin' element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>


  </>
}

export default App;
