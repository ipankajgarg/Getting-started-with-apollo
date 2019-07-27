import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function App(props) {
  return <div className="App">hello world</div>;
}

const query = gql`
  {
    country(code: "BR") {
      name
      native
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

export default graphql(query)(App);
