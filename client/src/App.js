import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CharacterCreateForm from "./components/CharacterCreateForm";
import CharacterDetail from "./components/CharacterDetail";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { getCharacters } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/character/create/" element={<CharacterCreateForm />} />
      </Routes>
    </>
  );
}

export default App;
