import {memo} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function ToiletDetail()
{
  const {id} = useParams();
  return (
    <>
      <h1>Toilet detail</h1>
      <Link to={`toilet/error/:id`}></Link>
    </>
  );
}

export default memo(ToiletDetail);