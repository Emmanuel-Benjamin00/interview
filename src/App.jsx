import React from "react"
import Sidebar from "./components/Sidebar"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import DataFeed from "./components/DataFeed"

function App() {


  return (
    <>
      <div className="d-flex" style={{ height: "100vh" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sidebar />} />
            <Route path="/data" element={<DataFeed />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
