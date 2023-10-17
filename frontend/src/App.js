import About from "./pages/About";
import Form from "./pages/Form";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    //Routes for navigation so that it can be properly integrated with the backend
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
