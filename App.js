import Navbar from "./components/Navbar";
import About from "./components/About";
import React from 'react'
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// let name ="nikita";
function App(props) {
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
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#191970";
      showAlert("Dark mode :ON", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode :OFF", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          disabled="Blog"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div>
          {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          
          </Route>
      </Switch>   ==>> old version*/}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextArea
                  heading="TEXT FORMATOR"
                  mode={mode}
                  toggleMode={toggleMode}
                  showAlert={showAlert}
                />
               }
            /> 
            <Route
              exact
              path="About/*"
              element={<About mode={mode} toggleMode={toggleMode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
