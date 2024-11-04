import { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8080/api/products");
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="mappproduct">
        {data.map((curr, index) => {
          return (
            <div key={curr.id} className={`product product${curr.id}`}>
              <h1>{curr.name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
