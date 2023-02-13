import React, { useState } from "react";

function AddClient(props) {
  // const [records, setRecords] = useState([]);
  // const [client, setclient] = useState({
  //   name: "",
  //   email: "",
  //   mobileno: "",
  // });

  // const handleChange = (e) => {
  //   setclient({ ...client, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newRecord = { ...client, id: new Date().getTime().toString() };
  //   console.log(client);
  //   setRecords([...records, newRecord]);
  //   console.log(records);
  // };

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
              <form>
                {/*onSubmit={handleSubmit}*/}
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    // value={client.name}
                    // onChange={handleChange}
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    // value={client.email}
                    // onChange={handleChange}
                    name="email"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    // value={client.mobileno}
                    // onChange={handleChange}
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
