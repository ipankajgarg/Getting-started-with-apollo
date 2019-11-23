import React from "react";
import { Spin } from "antd";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import Posts from "./Posts";

function AllPosts({ data: { loading, error, allPosts } }) {
  if (!loading && !error) {
    return <Posts data={allPosts} />;
  }
  return <Spin size="large" />;
}

const query = gql`
  {
    allPosts {
      id
      title
      description
    }
  }
`;

export default graphql(query)(AllPosts);
