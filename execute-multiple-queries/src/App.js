import React from "react";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

function App(props) {
  console.log(props);
  const {
    firstObj: { country: firstCountry, loading: firstLoading },secondObj:{country:secondCountry,loading:secondLoading}
  } = props;

  

  return (
    <div>
      <div>
        {firstLoading
          ? "fetching from first query"
          : "my first query result " + firstCountry.name}
      </div>
      <div>{secondLoading
          ? "fetching from second query"
          : "my first query result " + secondCountry.name}</div>
    </div>
  );
}


const query1 = gql`
  {
    country(code: "IN") {
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

const query2 = gql`
  {
    country(code: "AU") {
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

export default compose(
  graphql(query1, { name: "firstObj"}),
  graphql(query2, { name: "secondObj" })
)(App);
