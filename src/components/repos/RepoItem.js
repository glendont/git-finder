import React, { useContext } from "react";
import propTypes from "prop-types";
import Repos from "./Repos";
import GithubContext from "../../context/github/githubContext";

const RepoItem = ({ repo }) => {
  const githubContext = useContext(GithubContext);
  // const { repo } = githubContext;

  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}> {repo.name} </a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: propTypes.object.isRequired,
};

export default RepoItem;
