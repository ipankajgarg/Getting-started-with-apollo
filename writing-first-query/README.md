This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Finally!! we are done with writing our first query

###### Look into App.js inside src folder

 - **Importing gql from graphql-tag :** Which is used for writing queries as queries are not a valid javascript so we are wrapping query string in the gql function in order to parse it into a query document

- **Importing graphql from react-apollo :** Its a function that takes a query as an arguement in the first parantheses and component in the second parantheses then execute the query on the first mount of a component (query runs automatically by the graphql function)



Lets see next how we can access the data which is fetched from the query