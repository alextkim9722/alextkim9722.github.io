import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Content from './components/content/Content'

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Sidebar />
      <Content />
    </BrowserRouter>
    </>
  )
}

export default App
