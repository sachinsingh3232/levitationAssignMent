import React from 'react'
import Form from './Pages/Form/Form'
import Login from './Pages/Login/Login'
import ForgotPasswordPage from './Pages/ForgotPassword/ForgotPassword'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/form" element={< Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App