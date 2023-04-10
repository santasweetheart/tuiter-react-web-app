import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img width={50}
                 className="float-end rounded-circle"
                 src={`../images/${tuit.image}`}/>
          </div>
          <div className="col-10">
            <div>
              <b>{tuit.userName}</b>
              {' '}
              <i className="bi bi-patch-check-fill"  style={{color: "blue"}}/>
              <span className="ps-1" style={{ color: "gray" }}>
                        {tuit.handle} · {tuit.time}
                    </span>
              <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}/>
            </div>
            <p>{tuit.tuit}</p>
            <TuitStats key= {tuit.id} tuit={tuit} />
          </div>
        </div>
      </li>
  );
};

export default TuitItem;