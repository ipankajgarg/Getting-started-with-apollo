import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//write data using mutation
import { InMemoryCache } from "apollo-cache-inmemory";

//free graphql endpoint

const cache = new InMemoryCache({ addTypename: true });

// cache.writeData({
//   data: {
//     posts: [
//       { id: 1, title: "rainy day" },
//       { id: 2, title: "wet sand on the road" }
//     ]
//   }
// });

const client = new ApolloClient({
  cache,
  uri: "https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex",

  resolvers: {
    Query: {
      posts: () => {
        console.log("fetching list");
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
