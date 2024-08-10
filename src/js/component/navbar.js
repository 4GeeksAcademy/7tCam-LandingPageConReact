import React from "react";
// exportacion del componente
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark vw-100">
      <div className="container-fluid d-flex flex-row justify-content-between mx-4 ">
        <div>
          <h4 className="navbar-brand text-info" href="#">Start Bootstrap</h4>
        </div>
        <div className="d-felx aling-items-center" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;

