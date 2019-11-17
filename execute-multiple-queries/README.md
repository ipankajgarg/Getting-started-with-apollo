## This is how multiple queries can be executed

- react-apollo exports a compose function. Using this function you may cleanly use several component enhancers at once. Including multiple graphql().This should clean up your code when you use multiple enhancers

-An important note is that compose() executes the first enhancer first and works its way forwards through the list of enhancers.

- Example

```javascript
compose(funcA, funcB)(Component);
```

funcA will execute first and then funcB **or** funcA(funcB(Component))

```javascript
export default compose(
  graphql(query1, { name: "firstObj" }),
  graphql(query2, { name: "secondObj" })
)(App);
```

### what is the name property inside each graphql function ?

- its totally optional

- By default if the GraphQL document you pass into **graphql()** is a query then your prop will be named data(props.data[queryName])

-While appropriate these default names collide when you are trying to use multiple queries with the same component
