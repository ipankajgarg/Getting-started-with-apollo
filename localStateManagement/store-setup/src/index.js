import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

//free graphql endpoint

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache
});

//add uri value according to your end point like:-
//{uri:"http://endpoint"}
//

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
