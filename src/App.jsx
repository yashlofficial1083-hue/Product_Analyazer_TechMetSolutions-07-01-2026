// import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Products from "./components/Products";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  return (
    <div>
      <Header setSearchQuery={setSearchQuery} setSortOption={setSortOption} />
         <Products searchQuery={searchQuery} sortOption={sortOption} />
    
    </div>
  );
}

export default App;
