import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Products from "./components/Products";
import DetailPage from "./components/DetailPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  
  return (
    <Router>
      <div>
        <Header setSearchQuery={setSearchQuery} setSortOption={setSortOption} />
        <Routes>
          <Route 
            path="/" 
            element={<Products searchQuery={searchQuery} sortOption={sortOption} />} 
          />
          <Route 
            path="/product/:id" 
            element={<DetailPage />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
