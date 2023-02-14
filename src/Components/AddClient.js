import axios from "axios";
import React, { useState } from "react";

function AddClient(props) {
  const [formValue, setformValue] = useState({});
  const [isformSubmit, setIsFormSubmit] = useState(false);

  const handleChange = (e) => {
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsFormSubmit(true);
      const response = await axios.post(
        "http://3.108.40.132:1337/api/clients",
        {
          data: {
            client_name: formValue.name,
            email: formValue.email,
            phone: formValue.phone,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setIsFormSubmit(false);
        window.location = "/";
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Client
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
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    name="email"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    name="mobileno"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddClient;
