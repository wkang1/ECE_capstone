import React from "react";
import { NativeRouter as Router, Route, Routes } from "react-router-native";

import AddPhoto from "./AddPhotoScreen";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
      <Route oath="/" element={<Setup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addPhoto" element={<AddPhoto />} />
    </Routes>
   </Router>
  );
}

export default App;