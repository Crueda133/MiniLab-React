// hi
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./components/HomePage";

import dataJson from "./assets/data.json";
import { useState } from "react";

function App() {
  const [data, setData] = useState(dataJson);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div className="app container">
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <HomePage items={data} onDelete={handleDelete} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
