import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./pages/Home/Home.page"
import "./App.scss"
import Hero from "./components/Hero/Hero.component"

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <Link to="/" className="App-nav-title">
            Cook's Repo
          </Link>
          <span className="App-nav-span">
            <Link to="/about" className="App-nav-link">
              About
            </Link>

            <Link to="/users" className="App-nav-link">
              Login
            </Link>
          </span>
        </nav>
        <Hero />

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
          <Route path="/">{<Home />}</Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
