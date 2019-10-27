### Executing a mutation

After wrapping mutation in graphql

- We can access mutate function that we can call at any time to execute the mutation.

- An object with fields that represent the current status of the mutation's execution

The mutate function accept multiple option. In the example above, we provide the variables option to createPost, which enables us to specify any GraphQL variables that the mutation requires.
