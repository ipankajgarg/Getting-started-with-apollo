import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

//free graphql endpoint

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    return object.name;
  }
});

const client = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com/",
  resolvers: {
    Mutation: {
      mutateCountry(parentValue, { name, data }, { cache }, info) {
        const fragment = gql`
          fragment completeTodo on TodoItem {
            completed
          }
        `;

        var country = cache.readFragment({ fragment, id: name });
        country = { ...country, name: data };
        cache.writeData({ id: name, data: country });
        return null;
      }
    }
  }
});

//change uri value according to your end point

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
