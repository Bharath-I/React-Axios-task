import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = ({ setId }) => {
  const [products, setProducts] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://6681a68204acc3545a074580.mockapi.io/api/users")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://6681a68204acc3545a074580.mockapi.io/api/users/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">User email</th>
            <th scope="col">Website</th>
            <th scope="col">Company name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.website}</td>
                  <td>{item.company.name}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(item.id);
                      }}
                      type="button"
                      class="btn btn-outline-primary"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      type="button"
                      class="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <button
        onClick={() => {
          navigate("/Create");
        }}
        type="button"
        class="btn btn-outline-primary btn-lg "
      >
        + Create
      </button>
    </div>
  );
};

export default User;