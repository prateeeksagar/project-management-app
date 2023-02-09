import React from "react";
import AddClient from "./AddClient";
import AddProject from "./AddProject";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Project Management
        </a>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Client
          </button>

          <button
            type="button"
            className="btn btn-success ms-1"
            data-bs-toggle="modal"
            data-bs-target="#addProject"
          >
            Add Project
          </button>
        </div>
      </div>
      <AddClient />
      <AddProject />
    </nav>
  );
}

export default Header;
