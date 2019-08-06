import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function App(props) {
  const { loading, country } = props.data;

  if (loading) {
    return <div>....Loading</div>;
  }
  return <div>I am from {country.name}</div>;
}

//If you run this code you might see an error message
//Cannot read property 'name' of null

//we can use any name in the place of CountryCode

const query = gql`
  query CountryCode($code:String!){
    country(code: $code) {
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

export default graphql(query,{options:()=>({variables:{code:"IN"}})})(App);
