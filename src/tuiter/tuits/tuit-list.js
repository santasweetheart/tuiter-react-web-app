import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
import TuitItem from "./tuit-item";

const TuitList = () => {
  const {tuitsArray,loading} = useSelector((state) => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, [])
  return (
      <ul className="list-group">
        { loading &&
        <li className="list-group-item">
          Loading...
        </li>
        }
        {tuitsArray.map &&
        tuitsArray.map((tuit) => <TuitItem key={tuit._id} tuit={tuit} />)}
      </ul>
  );
};

export default TuitList;