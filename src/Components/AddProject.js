import axios from "axios";
import React, { useEffect, useState } from "react";

function AddProject(props) {
  const [formValue, setFormValue] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [client, setClient] = useState({});

  useEffect(() => {
    fetchClientApi();
  }, [isFormSubmit]);

  const fetchClientApi = async () => {
    try {
      const res = await axios.get("http://3.108.40.132:1337/api/clients", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        setClient(res.data.data);
      } else {
        alert("client data not recieved in project section");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("project-----", formValue);
    try {
      setIsFormSubmit(true);
      const response = await axios.post(
        "http://3.108.40.132:1337/api/projects",
        {
          data: {
            project_name: formValue.project_name,
            description: formValue.description,
            status: formValue.status,
            clients: formValue.client,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("added project res - ", response);

      if (response.status === 200) {
        setIsFormSubmit(false);

        // window.location = "/";
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log("something went wrong!!!");
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="addProject"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    name="project_name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    name="description"
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Status</label>
                  <select
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option>Select Status</option>
                    <option>Not Statred</option>
                    <option>Pending</option>
                    <option>Started</option>
                    <option>Completed</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Client</label>
                  <select
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    name="client"
                  >
                    <option>Select Client</option>
                    {client.length > 0 &&
                      client?.map((clientname) => (
                        <option key={clientname.id} value={clientname.id}>
                          {clientname.attributes.client_name}
                        </option>
                      ))}
                  </select>
                </div>
                {isFormSubmit ? (
                  <button type="submit" className="btn btn-success">
                    Submiting...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProject;
