/**
 *  App.js - Main component */

/* Imports */
import './App.css';
// Page imports
import HomePage from "./components/HomePage/HomePage";
import Nature from "./components/Nature/Nature";
import People from "./components/People/People";
import Sports from "./components/Sports/Sports";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// Sport photo imports
import sports1 from "./images/ColinJackson.jpg";
import sports2 from "./images/mum.jpg";
import sports3 from "./images/hillclimb2.jpg";
import sports4 from "./images/tomandco.jpg";
import sports5 from "./images/sunsetrowing.jpg";
import sports6 from "./images/rugby.jpg";
import sports7 from "./images/quadbw.jpg";
import sports8 from "./images/polo.jpg";
// Nature photo imports
import nature1 from "./images/cow.jpg";
import nature2 from "./images/goat.jpg";
import nature3 from "./images/sheep.jpg";
import nature4 from "./images/owl.jpg";
import nature5 from "./images/donkey.jpg";
import plant1 from "./images/flower.jpg";
import plant2 from "./images/mushrooms.jpg";
import view1 from "./images/Bassenthwaite.jpg"; 
import view2 from "./images/hiking2.jpg";
import view3 from "./images/oilworks.jpg";
import view4 from "./images/SouthGare3.jpg";
import view5 from "./images/YarmReflection2.jpg";
// People photo imports
import people1 from "./images/berets.jpg";
import people2 from "./images/anglakes.jpg";
import people3 from "./images/children.jpg";
import people5 from "./images/mumMaryWinWC2xMasters2017.jpg";
import people6 from "./images/reflectionPortrait.jpg";

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";

/* App component */
export default function App() {

  fetch('http://localhost:8000/')
  .then(response => response.json())
  .then(data => console.log(data));

  return (
    <Router>
      <div>
        <nav className="sticky-top navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item color">
                <Link to="/" className="hover nav-link">Home</Link>
              </li>
              <li className="nav-item color">
                <Link to="/people" className="hover nav-link">People</Link>
              </li>
              <li className="nav-item color">
                <Link to="/nature" className="hover nav-link">Nature</Link>
              </li>
              <li className="nav-item color">
                <Link to="/sports" className="hover nav-link">Sports</Link>
              </li>
              <li className="nav-item color">
                <Link to="/blog" className="hover nav-link">Blog</Link>
              </li>
              <li className="nav-item color">
                <Link to="/contact" className="hover nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* Home route */}
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* People photo page routes */}
          <Route path="/people">
            <People 
              head1={people1}
              head2={people2}
              head3={people3}
              head5={people5}
              head6={people6}
            />
          </Route> 
          {/* Nature photo page routes */}
          <Route path="/nature">
            <Nature 
              outdoor1={nature1}
              outdoor2={nature2}
              outdoor3={nature3}
              outdoor4={nature4}
              outdoor5={nature5}
              plants1={plant1}
              plants2={plant2}
              land1={view1}
              land2={view2}
              land3={view3}
              land4={view4}
              land5={view5}
            />
          </Route>
          {/* Sports photo page routes */}
          <Route path="/sports">
            <Sports 
              sport1={sports1}
              sport2={sports2}
              sport3={sports3}
              sport4={sports4}
              sport5={sports5}
              sport6={sports6}
              sport7={sports7}
              sport8={sports8}
            />
          </Route>
          {/* Blog route */}
          <Route path="/blog">
            <Blog />
          </Route>
          {/* Contact page route */}
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}