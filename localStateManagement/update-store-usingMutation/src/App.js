import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

//**  Direct write and read in apollo state

function App({ data, mutate }) {
  function changeCountry(name, data) {
    mutate({ variables: { name, data } });
  }

  if (data.loading) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      {data.countries.map(function(country) {
        return (
          <div
            onClick={() => changeCountry(country.name, "i am changed")}
            key={country.name}
          >
            {country.name}
            <span>{country.phone}</span>
          </div>
        );
      })}
    </div>
  );
}

const query = gql`
  {
    countries {
      name
      phone
    }
  }
`;

const mutation = gql`
  mutation($name: string, $data: string) {
    mutateCountry(name: $name, data: $data) @client {
      name
      phone
    }
  }
`;

export default graphql(query)(graphql(mutation)(App));
