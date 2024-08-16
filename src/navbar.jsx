import React from "react";

function Navbar() {
  return (
    <>
      <ul class="nav nav-underline ms-2">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Pranab Kumar Dwibedi
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Education
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses & Certificates
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">C PROGRAMMING LANGUAGE</a></li>
            <li><a class="dropdown-item" href="#">Programming with JavaScript</a></li>
            <li><a class="dropdown-item" href="#"></a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Internships
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">DRDO</a></li>
            <li><a class="dropdown-item" href="#">Bharat Intern</a></li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
