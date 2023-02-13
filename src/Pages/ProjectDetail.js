import React from "react";
import Header from "../Components/Header";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";
function ProjectDetail(props) {
  return (
    <div>
      <Header />
      <div className="container py-5 border  rounded mt-5 mb-5">
        <div className="div-row">
          <div className="text-end mt-0 me-4">
            <Link to="/">
              <button type="submit" className="btn btn-secondary">
                Back
              </button>
            </Link>
          </div>
          <div>
            <h1>eCommerce Website</h1>
            <p>this is discription</p>
          </div>
          <div className="mt-5">
            <h4 className="mb-0">Project Status :</h4>
            <p>In progress</p>
          </div>
          <div className="mt-5 ">
            <h3>Client Information</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <BsFillPersonFill />
                Prateek sagar
              </li>
              <li className="list-group-item">
                {" "}
                <AiFillMail />
                prateeksagar2103@gmail.com
              </li>
              <li className="list-group-item">
                <BsFillTelephoneFill /> 7827445441
              </li>
            </ul>
          </div>
          {/* <div className="conatiner py-4"></div> */}
          <div className="container py-4 border p-3 mt-4">
            <h2 className="mb-3">Update Project Details</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">
                  <BsFillPersonFill />
                  Name
                </label>
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

              <button type="submit" className="btn btn-success border p-3">
                Update Project
              </button>
            </form>
            <div className="text-end">
              <button type="submit" className="btn btn-danger">
                Delete Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
