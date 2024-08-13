import React from "react";
// exportacion del componente
function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
    //   <div className="container-fluid d-flex flex-row justify-content-between mx-4 ">
    //     <div>
    //     </div>
    //     <div className="d-felx aling-items-center" id="navbarNav">
    //       <ul className="navbar-nav d-flex flex-row">
    //         <li className="nav-item">
    //         </li>
    //         <li className="nav-item">
    //         </li>
    //         <li className="nav-item">
    //         </li>
    //         <li className="nav-item">
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    // )


    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="d-flex flex-row justify-content-between w-100 mx-4">
        <h4 className="navbar-brand text-info" href="#">Start Bootstrap</h4>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
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
    </nav>)
}
export default Navbar;

