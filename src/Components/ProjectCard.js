import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ id }) {
  const [projectInfo, setProjectInfo] = useState([]);

  useEffect(() => {
    axios.get(`http://3.108.40.132:1337/api/projects/${id}`).then((res) => {
      setProjectInfo(res.data.data);
      // console.log(res.data.data);
    });
  }, []);
  console.log(projectInfo);
  if (!projectInfo) {
    return <>Loading.....</>;
  }
  return (
    <div className="col-md-6 py-2">
      <div className="card d-flex ">
        <div className="card-body d-flex justify-content-between">
          <div>
            <h5 className="card-title">
              {projectInfo.attributes.project_name}
            </h5>
            <p className="card-text">
              Status: <b>{projectInfo.attributes.status}</b>
            </p>
          </div>
          <Link to="/projectdetails">
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
}

export default ProjectCard;
