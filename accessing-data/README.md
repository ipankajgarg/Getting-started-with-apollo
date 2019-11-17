## Accessing Data

- Importing graphql from react-apollo is a function that takes a query as an arguement in the first parantheses and component in the second parantheses then execute the query on the first mount of a component (query runs automatically by the graphql function)

```javascript
function App(props) {
  const { loading, country } = props.data;
  if (loading) {
    return <div>....Loading</div>;
  }
  return <div>{country.name}</div>;
}
```

- The response comes from the query is accessible inside the component(component which was wrapped inside 2 parantheses) by **props.data[queryName]**.Other properties comes along with response like loading ,error etc so you don't have to manage these things manually

**If you have ever worked in redux then you know managing loading and error stuff for every network request needs so much repeatitive code .There's no middleware to set up or boilerplate to write before making your first request, nor do you need to worry about transforming and caching the response**
