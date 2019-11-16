import React from "react";
import gql from "graphql-tag";
import { withApollo, graphql } from "react-apollo";

//**  Direct write and read in apollo state

function App(props) {
  return (
    <div>
      Reading and writing from store
      <button
        onClick={() => {
          props.client.writeData({ data: { name: "apollo course" } });
        }}
      >
        Click me
      </button>
      <div>{`This is ${props.data.name}`}</div>
    </div>
  );
}

const query = gql`
  {
    name @client
  }
`;

export default graphql(query)(withApollo(App));
