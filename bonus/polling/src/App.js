import React, { useEffect } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function App({ data: { loading, country, startPolling, stopPolling } }) {
  useEffect(() => {
    console.log("start polling on first mount");
    startPolling(3000);
  }, []);

  if (loading) return <div>...loading result</div>;

  return (
    <div>
      <h2>{country.name}</h2>
      <button onClick={() => stopPolling()}>Stop Polling</button>
    </div>
  );
}

const query = gql`
  {
    country(code: "BR") {
      name
    }
  }
`;

export default graphql(query)(App);
