import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<>hello home</>}/>
      <Route path='/about' element={<>hello about</>}/>
    </Routes>
    </BrowserRouter>
  )
}
