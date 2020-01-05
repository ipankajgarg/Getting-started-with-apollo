import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

//free graphql endpoint

//Dont do that if you have a kid key in your object
//thiis line of code is just to create a unique identifier

const cache = new InMemoryCache({
  addTypename: false
});

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
