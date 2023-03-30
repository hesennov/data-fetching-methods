import { useParams } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();
//   const singleuser = 
  return <div>user{id}</div>;
};
export default SingleUser;
