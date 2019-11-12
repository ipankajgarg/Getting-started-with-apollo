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

//initialize data**

// function App(props) {
//   console.log(props);

//   return (
//     <div>
//       {props.data.posts && console.log(props.data.posts)}
//       My first mutation
//       <button
//         onClick={() => {
//           console.log("clicked");
//           props.client.writeData({ data: { myKey: "ipankaj" } });
//         }}
//       >
//         Click me
//       </button>
//       <div>{props.data.myKey}</div>
//     </div>
//   );
// }
//**

//**mutate store */
// function App({ data, mutate, client }) {
//   console.log(client, data);
//   function mutateCountry(name) {
//     console.log("mutation");
//     mutate({ variables: { name } });
//   }

//   const { loading, countries, error } = data;
//   if (!loading && countries && !error) {
//     return (
//       <div>
//         {countries.map(item => (
//           <div key={item.name} onClick={() => mutateCountry(item.name)}>
//             {item.name}
//             <span>{item.phone}</span>
//           </div>
//         ))}
//       </div>
//     );
//   } else {
//     return <div>...Fetching data</div>;
//   }
// }

// const query = gql`
//   {
//     countries {
//       name
//       phone
//     }
//   }
// `;

function App() {
  return (
    <div>
      This is mixin testing stuff
      <p style={{ color: "red", fontWeight: "bold" }}>Don't go through</p>
    </div>
  );
}

// const query = gql`
//   {
//     posts @client {
//       title
//     }
//   }
// `;

// const mutation = gql`
//   mutation Mutate($name: String) {
//     countryName(name: $name) @client
//   }
// `;

export default App;
