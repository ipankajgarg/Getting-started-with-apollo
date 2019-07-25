This repository is about how you can set up or integrate apollo with react

**Only focus on index.js inside src folder**

Inside index.js we are creating an instance of apollo client in which config object has passed.Config object has n numbers of property that we will see one by one.For now object has only uri property which refers to an end point where all our graphql queries will request for.It is possible to use different endpoint for different queries but it is not required in our application but i will cover it too :)


**Wrap your root component inside ApolloProvider and pass client(ApolloClient config) as a props which is a required configuration at this point of time**

If you run this you won't see anything different because we haven't done anything yet instead of setting up 