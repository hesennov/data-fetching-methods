import { useParams } from "react-router-dom";

const SingleUser = (props) => {
  const { hsn } = useParams();
  const singleuser = props.data.find((item) => item.id === Number(hsn));
  return (
    <div>
      user{hsn}
      <br />
      <h1>{singleuser?.name}</h1>
      <h1>{singleuser?.username}</h1>
      <h2>
        <i>{singleuser?.email}</i>
      </h2>
      <h2>
        <b>{singleuser?.phone}</b>
      </h2>
      <h2>
        <b>{singleuser?.website}</b>
      </h2>
    </div>
  );
};
export default SingleUser;
