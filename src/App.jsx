// import './App.css';

import React, { Component } from "react";
import AllRoutes from "./components/AllRoutes";
export default class App extends Component {


    constructor(props) {
    super(props);


        // Initialize isAuthenticated from sessionStorage
    this.state = {
      isAuthenticated: sessionStorage.getItem('isAuthenticated') === 'true', // Convert the string to a boolean
    };
  }

  // Add event listeners when the component mounts
  componentDidMount() {
    window.addEventListener('storage', this.handleStorageChange);
  }

  // Remove event listeners when the component unmounts
  componentWillUnmount() {
    window.removeEventListener('storage', this.handleStorageChange);
  }

  // Handle changes to sessionStorage
  handleStorageChange = (e) => {
    if (e.key === 'isAuthenticated') {
      this.setState({
        isAuthenticated: e.newValue === 'true',
      });
    }
  };


  render() {

    let isAuthenticated = sessionStorage.getItem('isAuthenticated');
    // const { isAuthenticated } = this.state;
    console.log(isAuthenticated);

    return (<div>
      <nav className="navbar navbar-expand-lg navbar-dark primary-color">
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/nhl">NHL</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/landing">Landing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/test">Test</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>

               {isAuthenticated !== 'true' ? (
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/logout">Logout</a>
                </li>
              )}

    </ul>
  </div>
</nav>
      <AllRoutes />
      </div>
    )
  }
}
