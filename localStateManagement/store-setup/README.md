## Settting up store

### This is where you can manage all your application data within a object

#### Step-1 :-

Make sure the apollo-cache-inmemory package is installed in your project

##### To install

```javascript

npm  install  --save  apollo-cache-inmemory

```

#### Step-2:-

##### To Initialize InMemoryCache object and provide it to the ApolloClient constructor like so:-

```javascript
const cache = new InMemoryCache();

const client = new ApolloClient({
  cache
});
```

And you're done :)
