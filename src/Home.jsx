import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://6681a68204acc3545a074580.mockapi.io/api/users")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
          {products.map((item, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card h-100" style={{border: "1px solid black", margin:"10px"}}>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.email}</p>
                  <p className="card-text">{item.company.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;