import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function ProjectSection(props) {
  const [project, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://3.108.40.132:1337/api/projects").then((res) => {
      setProjects(res.data.data);
    });
  }, []);
  console.log(project);

  if (!project) {
    return <>Loading......</>;
  }
  return (
    <div className="container mt-5">
      <div className="row ">
        {project.map((pjt, index) => {
          return (
            <div className="col-md-6 py-2" key={index}>
              <div className="card d-flex ">
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5 className="card-title">
                      {pjt.attributes.project_name}
                    </h5>
                    <p className="card-text">
                      Status: <b>{pjt.attributes.status}</b>
                    </p>
                  </div>
                  <Link to={`${pjt.id}`}>
                    <button className="btn btn-secoundary">
                      {/* <a href="#" >  className="btn btn-secondary" */}
                      view
                      {/* </a> */}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;
