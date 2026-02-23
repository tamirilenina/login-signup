import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            width: "220px",
            height: "320px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            display: "inline-block",
            margin: "15px",
            padding: "10px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
          <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
            {item.title}
          </h3>
          <p style={{ fontWeight: "bold", color: "green" }}>
            ₹ {item.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;