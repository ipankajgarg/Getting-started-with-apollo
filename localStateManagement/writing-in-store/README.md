## Direct writes in store

### There are two ways of writing in a cache

1. ##### Direct writes (without any Graqhql mutation or resolver function).
2. ##### Writes using Graphql mutation.

#### To directly write in a cache we will use Apollo Client instance directly by accessing the `client` property within the render prop function of the `our` Component

```javascript
import { withApollo } from "react-apollo";
withApollo(App);
```

These two line of code will give us an access of client object inside our App Component
then we can simply do :-

```javascript
props.client.writeData({ data: { name: "Apollo course" } });
```

`What if we want to immediately subscribe to the data we just wrote to the cache?`
