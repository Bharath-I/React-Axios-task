import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    website: "",
    company_name: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://6681a68204acc3545a074580.mockapi.io/api/users/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://6681a68204acc3545a074580.mockapi.io/api/users/${id}`,
        editData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate("/user");
  };
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="row g-3 needs-validation"
        novalidate
      >
        <div className="col-md-4 position-relative">
          <label for="validationTooltip01" className="form-label">
            User name
          </label>
          <input
            type="text"
            name="product_id"
            className="form-control"
            id="validationTooltip01"
            value={editData.name}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label for="validationTooltip01" className="form-label">
            User Email
          </label>
          <input
            type="text"
            name="product_name"
            className="form-control"
            id="validationTooltip01"
            value={editData.email}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label for="validationTooltip01" className="form-label">
            Website
          </label>
          <input
            type="text"
            name="product_price"
            className="form-control"
            id="validationTooltip01"
            value={editData.website}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>
        <div className="col-md-4 position-relative">
          <label for="validationTooltip01" className="form-label">
            company Name
          </label>
          <input
            type="text"
            name="product_description"
            className="form-control"
            id="validationTooltip01"
            value={editData.company_name}
            onChange={handleChange}
          />
          <div className="valid-tooltip">Looks good!</div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;