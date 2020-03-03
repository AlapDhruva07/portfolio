import React from 'react';

function Nav() {
    return(
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a className="navbar-brand" href="index.html"> Alap Dhruva</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link" href="#portfolio">PORTFOLIO</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#aboutme">ABOUT</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#contact">CONTACT</a>
                      </li>    
                      </ul>
                  </div>  
              </nav>
    );
  }

  export default Nav;