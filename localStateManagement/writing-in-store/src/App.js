import React from "react";
import gql from "graphql-tag";
import { withApollo } from "react-apollo";

//**  Direct write and read in apollo state

function App(props) {
  console.log(props);

  return (
    <div>
      Write in store
      <button
        onClick={() => {
          props.client.writeData({ data: { name: "Apollo course" } });
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default withApollo(App);
