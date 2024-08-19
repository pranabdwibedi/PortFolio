import React from "react";

function Navbar() {
  return (
    <>
      <ul className="nav nav-underline ms-2 d-flex justify-content-between pe-5 ps-2">
        <li className="nav-item me-4">
          <a className="nav-link active" aria-current="page" href="#">
            Pranab Kumar Dwibedi
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href="Education">
            Education
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href="#">
            Courses & Certificates
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href="#">
          Internships
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href="#">
          Contact me
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
