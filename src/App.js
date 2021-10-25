import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Studio from "./Pages/Studio";
import Reel from "./Pages/Reel";
import Carrers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import ProjectTemplates from "./Pages/ProjectTemplates";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/studio">
          <Studio />
        </Route>
        <Route exact path="/reels">
          <Reel />
        </Route>
        <Route exact path="/careers">
          <Carrers />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/work/:id">
          <ProjectTemplates />
        </Route>
      </Switch>
    </>
  );
}

export default App;
