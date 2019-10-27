import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function App(props) {
  function createPost() {
    props
      .mutate({ variables: { text: "Coffee with code" } })
      .then(res => console.log("here's my data", res))
      .catch(err => console.log(err));
  }

  console.log(props);
  return <div onClick={createPost}>hello world</div>;
}

const mutation = gql`
  mutation CreatePost($text: String!) {
    createPost(text: $text, title: "It wasn't hard ") {
      text
      title
      id
    }
  }
`;

export default graphql(mutation)(App);
