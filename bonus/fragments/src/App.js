import React, { useEffect } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function App({ data: { loading, country, startPolling, stopPolling } }) {
  if (loading) return <div>...loading result</div>;

  return (
    <div>
      <h2>{country.name}</h2>
      <h3>{country.phone}</h3>
    </div>
  );
}

const fragments = gql`
  fragment NameParts on Country {
    name
    phone
  }
`;

const query = gql`
  {
    country(code: "BR") {
      ...NameParts
    }
  }
  ${fragments}
`;

export default graphql(query)(App);
