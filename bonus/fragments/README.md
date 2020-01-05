## Fragments

### Use Case :-

The most straightforward use of fragments is to reuse parts of queries (or mutations or subscriptions) in various parts of your application.

It's important to note that the component after the `on` clause is designated for the type we are selecting from and it can be anything.

```javascript
const fragments = gql`
  fragment AboutPart on Country {
    name
    phone
  }
`;
```

We can simply export this fragments and import wherever we want name and phone fields.

**like**

```javascript
const query = gql`
  {
    country(code: "BR") {
      ...AboutPart
    }
  }
  ${fragments}
`;
```
