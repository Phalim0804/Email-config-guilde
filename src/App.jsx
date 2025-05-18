import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./Components/Pages/Home/homePage.jsx";
import Thunderbird from "./Components/Pages/Thunderbird/thunderbird.jsx";
import Outlook from "./Components/Pages/Outlook/outlook.jsx";
import Gmail from "./Components/Pages/Gmail/gmail.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/thunderbird" element={<Thunderbird />} />
        <Route path="/outlook" element={<Outlook />} />
        <Route path="/gmail" element={<Gmail />} />
      </Routes>
    </Router>
  );
};

export default App;
