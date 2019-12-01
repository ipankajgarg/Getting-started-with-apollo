## Store initialization

Importing InMemoryCache

```javascript
import { InMemoryCache } from "apollo-cache-inmemory";
```

Create an instance of cache

```javascript
const cache = new InMemoryCache({
  addTypename: false
});
```

addTypename creates a unique identifier to include in object (default is an id property) but in our case we don't need unique indentifier so i setted it false

```javascript
cache.writeData({
  data: {
    course: {
      title: "Getting started with apollo",
      technologies: ["react", "react-router", "apollo", "graphql"]
    }
  }
});
```

we can initialize whatever data we need inside data property

                                  and then,

```javascript
const query = gql`
  {
    course @client {
      title
      technologies
    }
  }
`;
```

fetch that data just by wrirting this query

- `@client` directive next to our `course` field. This tells Apollo Client to fetch the field data locally (either from the cache or using a local resolver), instead of sending it to our GraphQL server.
