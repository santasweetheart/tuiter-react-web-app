import React from "react";
import { useDispatch } from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
 const dispatch = useDispatch();

  const heartClass = tuit.liked ? 'bi bi-heart-fill text-danger me-2' : 'bi bi-heart me-2';
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
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
          }))} className={heartClass}/>
          {' '} {tuit.likes}
        </div>
        <div className="col">
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1
          }))} className="bi bi-hand-thumbs-down-fill me-2"/>
          {' '} {tuit.dislikes}
        </div>
        <div className="col">
          <i className="bi bi-share"/>
        </div>
      </div>
  );
};

export default TuitStats;