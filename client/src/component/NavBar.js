import React from "react";
import "./NavBar.css"
export default function NavBar() {
  return (
    <>
      <div className="">
        
        <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body rounded">
          {/* <div className="container-fluid"> */}
          <div className="">
            <a className="navbar-brand" href="#">
             <span className="myanimate">Food Mantri</span> 
            </a>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            </div>
            {/* <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link"  href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cart
                  </a>
                </li>
              </ul>
            </div> */}
          {/* </div> */}
        </nav>
      </div>
    </>
  );
}
