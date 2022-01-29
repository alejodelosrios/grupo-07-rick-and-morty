import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import Home from "./pages/Home";
import { getCharacters } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </>
  );
}

export default App;
