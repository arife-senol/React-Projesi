import "./App.css";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import { Link, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function App() {
  const [activeProfile, setActiveProfile] = useState(null);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>Welcome to Witflix by Arife</h1>
        </Route>
        <Route exact path="/login">
          
          <Login />
        </Route>
        <Route exact path="/welcome">
          <Welcome setActiveProfile={setActiveProfile} />
        </Route>
        <Route path="/home">
          <Home activeProfile = {activeProfile}/>
        </Route>
      </Switch>
      <div className="dev-navigation">
        <Link to="/">HomePage</Link>
        <Link to="/login">Login</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/home">Home</Link>
      </div>
    </>
  );
}

export default App;
