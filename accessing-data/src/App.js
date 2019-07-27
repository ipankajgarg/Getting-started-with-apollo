import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function App(props) {
console.log(props)
const {loading , country} = props.data

if(loading){
  return <div>....Loading</div>
}
  return <div>{country.name}</div>;
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
