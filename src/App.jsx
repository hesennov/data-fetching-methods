import { useState } from "react";
import Fetching from "./Fetching";
import { Route, Routes } from "react-router-dom";
import SingleUser from "./SingleUser";
import Error from "./Error";

const App = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Fetching data={data} setData={setData} />} />
        <Route
          path="/post/:hsn"
          element={<SingleUser data={data} setData={setData} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
export default App;
