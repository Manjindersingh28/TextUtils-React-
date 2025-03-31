import About from "./About";
import "./App.css";
import Navbar from "./Navbar";
import React, { useState } from "react";
import Textform from "./Textform";
import Alert from "./Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [switchText, setSwitchText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setSwitchText("Disable Dark Mode");
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setSwitchText("Enable Dark Mode");
      showAlert("Dark mode Disabled", "success");
    }
  };
  return (
    <Router>
      <>
        <Navbar
          text="TextUtils"
          home="Home"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
          switchText={switchText}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/home"
              element={
                <Textform
                  logoName=""
                  heading="Enter Text Below To Analyse"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
