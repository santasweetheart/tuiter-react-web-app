import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitLikes } from "../reducers/tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const updateLikesTuitHandler = (id) => {
    dispatch(updateTuitLikes(id));
  }
  return (
      <div className="row mt-2">
        <div className="col">
          <i className="pr-6 bi bi-chat"/>
          {' '} {tuit.replies}
        </div>
        <div className="col">
          <i className="ms-1 bi bi-arrow-repeat"/>
          {' '} {tuit.retuits}
        </div>
        <div className="col">
          Likes: {tuit.likes}
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
          }))} className="bi bi-heart-fill me-2 text-danger"/>
        </div>
        <div className="col">
          <i className="bi bi-share"/>
        </div>
      </div>
  );
};

export default TuitStats;