import React, { useState, useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineMail, AiFillCaretDown } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Loader from "../components/Loader";

function ProjectDetails(props) {
  const [project, setProject] = useState([]);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [client, setClient] = useState("");

  useEffect(() => {
    fetchProjectApi();
    fetchClintApi();
  }, []);

  useEffect(() => {
    if (project) {
      setProjectName(project?.attributes?.project_name);
      setDescription(project?.attributes?.description);
      setStatus(project?.attributes?.status);
      setClient(project?.attributes?.clients?.data[0]?.id);
    }
  }, [project]);

  const fetchProjectApi = async () => {
    try {
      const response = await axios.get(
        `http://3.108.40.132:1337/api/projects/${id}?populate=*`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setProject(response.data.data);
        setIsLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchClintApi = async () => {
    try {
      const response = await axios.get("http://3.108.40.132:1337/api/clients", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setClients(response.data.data);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProject = async () => {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        "http://3.108.40.132:1337/api/projects/" + id,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("delete project-----", response);

      if (response.status === 200) {
        window.location = "/";
        setIsLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitForms = (e) => {
    e.preventDefault();
    updateProject();
  };

  const updateProject = async () => {
    try {
      setIsLoading(true);
      const response = await axios.put(
        "http://3.108.40.132:1337/api/projects/" + id,
        {
          data: {
            project_name: projectName,
            description: description,
            status: status,
            clients: client,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setIsLoading(false);
        window.location = "/";
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="border p-3 rounded">
              <div className="text-end">
                <button className="btn btn-light">Back</button>
              </div>
              <div>
                <h3>{project.attributes.project_name}</h3>
                <p className="mb-4">{project.attributes.description}</p>
                <p className="fw-bold mb-0">Project Status</p>
                <p>{project.attributes.status}</p>
              </div>

              {project.attributes.clients.data.length > 0 ? (
                <div className="mt-5">
                  <h5 className="mb-3">Client Information</h5>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <BiUserCircle
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      />
                      <span>
                        {
                          project?.attributes?.clients?.data[0].attributes
                            .client_name
                        }
                      </span>
                    </li>
                    <li className="list-group-item">
                      <AiOutlineMail
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      />
                      <span>
                        {project.attributes.clients.data[0].attributes.email}
                      </span>
                    </li>
                    <li className="list-group-item">
                      <BsFillTelephoneFill
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      />
                      <span>
                        {project.attributes.clients.data[0].attributes.phone}
                      </span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="mt-5">
                  <h6>No Client Found. Please add or update client!!</h6>
                </div>
              )}

              <div className="mt-5">
                <h5 className="mb-3">Update Project Details</h5>
                <form onSubmit={(e) => submitForms(e)}>
                  <div className="mb-2">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setProjectName(e.target.value)}
                      name="name"
                      value={`${projectName}`}
                    />
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      onChange={(e) => setDescription(e.target.value)}
                      name="description"
                      value={`${description}`}
                    ></textarea>
                  </div>

                  <div className="mb-2 position-relative">
                    <label className="form-label">Status</label>
                    <select
                      className="form-control"
                      onChange={(e) => setStatus(e.target.value)}
                      name="status"
                      value={`${status}`}
                    >
                      <option>Select Status</option>
                      <option value="Not Statred">Not Statred</option>
                      <option value="Pending">Pending</option>
                      <option value="Started">Started</option>
                      <option value="Completed">Completed</option>
                    </select>
                    <AiFillCaretDown className="select-caret" />
                  </div>

                  <div className="mb-3 position-relative">
                    <label className="form-label">Client</label>
                    <select
                      className="form-control"
                      onChange={(e) => setClient(e.target.value)}
                      name="client"
                      value={`${client}`}
                    >
                      <option>Select Client</option>
                      {clients.length > 0 &&
                        clients?.map((client) => (
                          <option value={client.id} key={client.id}>
                            {client.attributes.client_name}
                          </option>
                        ))}
                    </select>
                    <AiFillCaretDown className="select-caret" />
                  </div>

                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>

              <div className="text-end mt-4">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteProject()}
                >
                  <BsFillTrashFill /> Delete Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
