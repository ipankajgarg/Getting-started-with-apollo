import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function App({ data }) {
  return (
    <div>
      <h1>Store initialization</h1>
      <h2>{data.course.title}</h2>
      {data.course.technologies.map(tech => (
        <div key={tech}>{tech}</div>
      ))}
    </div>
  );
}

const query = gql`
  {
    course @client {
      title
      technologies
    }
  }
`;

export default graphql(query)(App);
