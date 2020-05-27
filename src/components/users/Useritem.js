import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Useritem = (props) => {
  return (
    <div className="card text-center">
      <img
        src={props.user.avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{props.user.login}</h3>
      <div>
        <Link
          to={`/user/${props.user.login}`}
          className="btn btn-dark btn-sm my-1"
        >
          More
        </Link>
      </div>
    </div>
  );
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Useritem;
