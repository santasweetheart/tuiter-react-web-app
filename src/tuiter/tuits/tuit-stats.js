import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitLikes } from "../reducers/tuits-reducer";

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
                <span onClick={() => updateLikesTuitHandler(tuit._id)}>
                    {tuit.liked && <i className=" ms-1 bi bi-heart-fill" style={{color: "red"}}/>}
                  {!tuit.liked && <i className=" ms-1 bi bi-heart"/>}
                  {' '} {tuit.likes}
                </span>
        </div>
        <div className="col">
          <i className="bi bi-share"/>
        </div>
      </div>
  );
};

export default TuitStats;