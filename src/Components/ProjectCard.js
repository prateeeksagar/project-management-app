import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  return (
    <div className="col-md-6 py-2">
      <div className="card d-flex ">
        <div className="card-body d-flex justify-content-between">
          <div>
            <h5 className="card-title">Mobile Application</h5>
            <p className="card-text">
              Status: <b>completed</b>
            </p>
          </div>
          <div>
            {/* <a href="#" >  className="btn btn-secondary" */}
            <Link to="/projectdetails">view</Link>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
