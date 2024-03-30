import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data1 = [
    {
      title: "Products 1",
      des: "This is Products 1",
      func: () => alert("Products 1 clicked"),
      image: "https://picsum.photos/100/100",
      url: "/product3",
    },
    {
      title: "Products 2",
      des: "This is Products 2",
      func: () => alert("Products 2 clicked"),
      image: "https://picsum.photos/100/100",
      url: "/product2",
    },
    {
      title: "Products 3",
      des: "This is Products 3",
      func: () => alert("Products 3 clicked"),
      image: "https://picsum.photos/100/100",
      url: "/product3",
    },
  ];
  const [loggeding, setLoggeding] = useState(false);

  if (loggeding) {
    return (
      <div className="App">
        <div>
          <h1>Logged in</h1>
        </div>
        <div className="grid">
          {data.map((item, index) => (
            <>
              <Card
                url={item.url}
                title={item.title}
                des={item.des}
                onClick={item.func}
                image={item.image}
                key={index + "card"}
              />
              {index + 1 !== data.length && <hr />}
            </>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <button
          onClick={() => {
            setLoggeding(true);
          }}
        >
          login
        </button>
        {data.map((item, index) => (
          <>
            <Card
              url={item.url}
              title={item.title}
              des={item.des}
              onClick={item.func}
              image={item.image}
              key={index + "card"}
            />
            {index + 1 !== data.length && <hr />}
          </>
        ))}
      </div>
    );
  }
}

export default App;
