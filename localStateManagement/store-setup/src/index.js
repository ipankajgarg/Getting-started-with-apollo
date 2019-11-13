import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

//free graphql endpoint

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com/"
});

//change uri value according to your end point

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
