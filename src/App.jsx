import { Route, Routes } from "react-router-dom"
import Layout from "./pages/layout/Layout"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Register from "./pages/register/Register"
import { ModalContext } from "./context/ModalContext"
import { useState } from "react"

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
    <ModalContext.Provider value={{ show, setShow }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      </ModalContext.Provider>
    </>
  )
}

export default App
