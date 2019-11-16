### Writing in store using mutation and our own local resolver

**This is one of the most challenging part in apollo ! according to me!!**

- Lets go through step by step

Writing mutation to update store is similar to writing mutation for Graphql server .The only difference is we use @client :-

### For Graphql server

```javascript
const mutation = gql`
  mutation($name: string, $data: string) {
    mutateCountry(name: $name, data: $data) {
      name
      phone
    }
  }
`;
```

### For Apollo store

```javascript
const mutation = gql`
  mutation($name: string, $data: string) {
    mutateCountry(name: $name, data: $data) @client {
      name
      phone
    }
  }
`;
```

If you'd like to implement your local state update as a GraphQL mutation, then you'll need to specify a function in your local resolver map. `The resolver map is an object with resolver functions for each GraphQL object type`. To visualize how this all lines up, it's useful to think of a GraphQL query or mutation as a tree of function calls for each field. These function calls resolve to data or another function call. So when a GraphQL query is run through Apollo Client, it looks for a way to essentially run functions for each field in the query. When it finds an `@client` directive on a field, it turns to its internal resolver map looking for a function it can run for that field.

### resolver map

```javascript
resolvers: {
  Mutation: {
  }
  Query: {
  }
}
```

### resolver function

```javascript
fieldName: (obj, args, context, info) => result;
```

The most useful arguments in resolver function are args(An object containing all of the arguments passed into the field which is in our case `name` and `phone` ) and context object through which we can get

- `context.client`: The Apollo Client instance.
- `context.cache`: The Apollo Cache instance, which can be used to manipulate the cache with `context.cache.readQuery`, `.writeQuery`, `.readFragment`, `.writeFragment`, and `.writeData`.

In order to change the country name or update the state, we first need to query the cache to find out the current name of a country in a cache.
We do this by reading a fragment from the cache with `cache.readFragment`. This function takes a fragment and an id(which is in our case `name`), which corresponds to the country.

Once we read the fragment, we can change the country object and write the updated data back to the cache. Since we don't plan on using the mutation's return result in our UI, we return null since all GraphQL types are nullable by default we can return anything we want.
