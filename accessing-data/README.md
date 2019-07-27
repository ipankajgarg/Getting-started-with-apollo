
- Importing graphql from react-apollo is a function that takes a query as an arguement in the first parantheses and component in the second parantheses then execute the query on the first mount of a component (query runs automatically by the graphql function)

- The response comes from the query is accessible inside the component(component which was wrapped inside 2 parantheses) by **props.data**.Other properties comes along with response like loading ,error etc so you don't have to manage these things manually

**If you have ever worked in redux then you know managing loading and error stuff for every network request needs so much repeatitive code**
