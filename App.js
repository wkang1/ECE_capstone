import React from "react";
import { NativeRouter as Router, Route, Routes } from "react-router-native";

import AddPhoto from "./AddPhotoScreen";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addPhoto" element={<AddPhoto />} />
    </Routes>
   </Router>
  );
}

export default App;