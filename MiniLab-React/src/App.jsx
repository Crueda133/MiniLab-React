import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";
import { ItemDetails } from "./pages/ItemDetails"; 
import { AboutPage } from "./pages/AboutPage"; 
import { NotFound } from "./pages/NotFound"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import dataJson from "./assets/data.json";
import { useState } from "react";

function App() {
  const [data, setData] = useState(dataJson);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <Router>
    <div className="app container">
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <Routes>
            <Route path="/" element={<HomePage items={data} onDelete={handleDelete} />} />
            <Route path="/item/:id" element={<ItemDetails items={data} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
