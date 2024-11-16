import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";
import { ItemDetails } from "./pages/ItemDetails";
import { AboutPage } from "./pages/AboutPage";
import { NotFound } from "./pages/NotFound";
import { AddItemForm } from "./components/AddItemForm";
import { EditItemForm } from "./components/EditItemForm";
import { Routes, Route } from "react-router-dom";

import dataJson from "./assets/data.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState(dataJson);
  const [editingItem, setEditingItem] = useState(null);
  const navigate = useNavigate();

  const handleAddItem = (newItem) => {
    setData((prevData) => [newItem, ...prevData]);
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (updatedItem) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    navigate(`/item/${updatedItem.id}`);
    setEditingItem(null);
  };
  const handleEditItem = (item) => {
    setEditingItem(item);
    navigate(`/item/${item.id}/edit`);
  };

  return (
    <div className="app">
      <Navbar className="navbar" />
      <div className="content-container">
        <Sidebar className="sidebar" />
        <div className="main-content">
          {/* <AddItemForm onAddItem={handleAddItem} /> */}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <AddItemForm onAddItem={handleAddItem} />
                  <HomePage
                    items={data}
                    onDelete={handleDelete}
                    onEdit={handleEditItem}
                  />
                </div>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/item/:id" element={<ItemDetails items={data} />} />
            <Route
              path="/item/:id/edit"
              element={
                editingItem ? (
                  <EditItemForm
                    item={editingItem}
                    onUpdateItem={handleUpdateItem}
                  />
                ) : (
                  <NotFound />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
