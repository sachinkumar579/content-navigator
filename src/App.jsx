import './App.css'
import DisplayCategories from './components/DisplayCategories'
import DisplayDocuments from './components/DisplayDocuments'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<DisplayCategories></DisplayCategories>}></Route>
      <Route path="/search" element={<DisplayDocuments></DisplayDocuments>}></Route>
    </Routes>
  </BrowserRouter>)
}

export default App