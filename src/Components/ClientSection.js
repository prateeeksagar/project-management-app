import axios from "axios";
import React, { useEffect, useState } from "react";

function ClientSection(props) {
  const [client, setClient] = useState([]);
  const [deleteClient, setDeleteClient] = useState(false);
  useEffect(() => {
    axios.get("http://3.108.40.132:1337/api/clients").then((res) => {
      setClient(res.data.data);
    });
  }, [deleteClient]);
  // console.log(client);

  const handleDeleteClient = async (id) => {
    try {
      setDeleteClient(true);
      const response = await axios.delete(
        "http://3.108.40.132:1337/api/clients/" + id,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setDeleteClient(false);
        // window.location = "/";
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!client) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {client.map((customer, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{customer.attributes.client_name}</td>
                <td>{customer.attributes.email}</td>
                <td>{customer.attributes.phone}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteClient(customer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ClientSection;
