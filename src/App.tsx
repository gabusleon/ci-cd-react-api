import { Route, Routes } from "react-router-dom";
import "./App.css";
import CharactersPage from "./Characters-page";
import CharacterPage from "./Character-page";
import SearchComponent from "./SearchComponent";

function App() {
 
  return (
    <Routes>
      <Route  path="/" element={<CharactersPage />} />
      <Route  path="/:id" element={<CharacterPage />} />
      <Route  path="/search" element={<SearchComponent />} />
    </Routes>
  );
}

export default App;