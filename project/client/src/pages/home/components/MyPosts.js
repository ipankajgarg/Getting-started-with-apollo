import React from "react";
import { Spin } from "antd";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import Posts from "./Posts";

function MyPost({ data: { loading, myPosts, error } }) {
  if (!error) {
    return <Posts data={myPosts} />;
  }
  return <Spin size="large" />;
}

const query = gql`
  query MyPosts($token: String!) {
    myPosts(token: $token) {
      id
      title
      description
    }
  }
`;

export default graphql(query, {
  options: {
    variables: {
      token: localStorage.getItem("token")
    }
  }
})(MyPost);
