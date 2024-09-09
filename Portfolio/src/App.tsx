import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Content from './components/content/Content'

import { router } from './components/content/Content'

import './App.css'

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
