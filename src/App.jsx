import axios from "axios";
import React, { useEffect, useState } from "react";
const App = () => {
  const [data, setData] = useState([]);

  //!axios method
  const fetch = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  //!fetch mehtod
  const fetch2 = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  //!async await method
  const fetch3 = () => {
    (async () => {
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  useEffect(() => {
    const fetch = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);

  return (
    // <h1>a</h1>
    <ul>
      {data.map((val, i) => (
        <>
          <li key={i}>{val.name}</li>
          <li key={i}>
            <i> {val.email}</i>
          </li>
        </>
      ))}
    </ul>
  );
};
export default App;
