import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function App(props) {
  console.log(props)
//now you see there's a mutate key inside a props object


return <div >My first mutation</div>
}




const mutation = gql`
mutation CreatePost($text:String!){
  createPost(text:$text,title:"i am on road"){
    text
    title
id 
  }
}
`

export default graphql(mutation)(App);
