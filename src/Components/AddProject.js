import React from "react";

function AddProject(props) {
  return (
    <>
      {/* Modal */}
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
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea type="text" className="form-control" />
                </div>

                <div className="mb-2">
                  <label className="form-label">Status</label>
                  <select className="form-control">
                    <option>Select Status</option>
                    <option>Not Statred</option>
                    <option>Pending</option>
                    <option>Started</option>
                    <option>Completed</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Client</label>
                  <select className="form-control">
                    <option>Select Client</option>
                    <option>Abc</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-success">
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

export default AddProject;
