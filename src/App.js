import { Routes, Route } from "react-router-dom";
import PlayerName from "./component/PlayerName";
import WelcomePage from "./component/WelcomePage";
import { useState } from "react";
import Conguratulation from "./component/Conguratulation";

export default function App() {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [movie, setMovie] = useState({});

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PlayerName name={name} setName={setName} err={err} setErr={setErr} />
        }
      />
      <Route path="/welcome" element={<WelcomePage name={name} movie={movie} setMovie={setMovie} />} />     
      <Route path="/final" element={<Conguratulation/>} />
    </Routes>
  );
}
