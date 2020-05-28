import React, { Fragment, useContext, useEffect } from "react";
import Users from "../users/Users";
import Search from "../users/Search";
import GithubContext from "../../context/github/githubContext";

const Home = () => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.initUsers();
  }, []);

  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
