import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => { //fetching data from server
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/products");
      const data = await response.json();
      if (response.ok) {
        setProducts(data);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>List of Products..</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
