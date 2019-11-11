import React from "react";
import gql from "graphql-tag";
import { graphql, withApollo } from "react-apollo";

//  **  Direct write and read in apollo state

// function App(props) {
//   console.log(props);

//   return (
//     <div>
//       My first mutation
//       <button
//         onClick={() => {
//           console.log("clicked");
//           //props.mutate();
//           props.client.writeData({ data: { myKey: "ipankaj" } });
//         }}
//       >
//         Click me
//       </button>
//       <div>{props.data.myKey}</div>
//     </div>
//   );
// }

// const query = gql`
//   {
//     myKey @client
//   }
// `;
// **

function App(props) {
  console.log(props);

  return (
    <div>
      {props.data.posts && console.log(props.data.posts)}
      My first mutation
      <button
        onClick={() => {
          console.log("clicked");
          props.client.writeData({ data: { myKey: "ipankaj" } });
        }}
      >
        Click me
      </button>
      <div>{props.data.myKey}</div>
    </div>
  );
}

const query = gql`
  {
    posts {
      id
      title
    }
  }
`;

// const query = gql`
//   mutation Mutate($id: Int) {
//     mutate(id: $id) @client
//   }
// `;

export default graphql(query)(App);
