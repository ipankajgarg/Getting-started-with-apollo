### Reading data from store

`Reading data from store is similar to fetching data from Graphql server`

The only difference is :-

`From Graphql server`

```javascript

query{
name
}

```

`From store`

```javascript

query{
name @client
}

```

You'll notice in our query that we have a `@client` directive next to our `name` field. This tells Apollo Client to fetch the field data locally (either from the cache or using a local resolver), instead of sending it to our GraphQL server. Once you call `client.writeData`, the query result on the render prop function will automatically update. All cache writes and reads are synchronous, so you don't have to worry about loading state.
