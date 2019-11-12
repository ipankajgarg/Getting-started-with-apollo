import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { gql } from "apollo-boost";

//write data using mutation
import { InMemoryCache } from "apollo-cache-inmemory";

//free graphql endpoint

const cache = new InMemoryCache({
  addTypename: true,
  dataIdFromObject: object => {
    return object.name;
  }
});

cache.writeData({
  data: {
    posts: [
      { title: "Rainy day", id: 1 },
      { title: "Wet sand on the road", id: 2 }
    ]
  }
});

const client = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com/",

  resolvers: {
    // Query: {
    // posts: () => {
    //   console.log("fetching list");
    //   return null;
    // }
    //}

    Mutation: {
      countryName(obj, { name }, { getCacheKey }, info) {
        console.log(name);

        //We dont need this because we are generating our own id
        // const id = getCacheKey({
        //   __typename: "Country",
        //   name
        // });
        console.log("mutating data");

        const fragment = gql`
          fragment completeTodo on TodoItem {
            name
          }
        `;
        const todo = cache.readFragment({
          fragment,
          id: name
        });
        const data = { ...todo, name: "You are changed" };
        cache.writeData({ id: name, data });
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
