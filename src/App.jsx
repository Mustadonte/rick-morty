import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Character } from "./components/Character/Character";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:characterId" element={<Character />} />
    </Routes>
  );
};

export default App;
