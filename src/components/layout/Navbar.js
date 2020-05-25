import React, { Component } from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };
  const propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={props.icon} />
        {props.title}
      </h1>
    </nav>
  );
};

export default Navbar;
