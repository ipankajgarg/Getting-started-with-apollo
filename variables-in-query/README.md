
This chapter is all about how we can add variables( variables are  just an arguments or parameters which are required in our query and denoted with **$** as prefix) in the query


- Inside graphql function the second arguement is optional which is an object where we can define our variables in the **options** key 

- options can be function that returns an object

```javascript
{
    options:(props)=>({variables:{}})
}
```

###### OR

```javascript
{
    options:{variables:{}}
}
```
Benefit and use case of a function?

- We can access **props** inside a function
- so if there's a key( which is coming from URL through react router http://localhost:3001/key or parent component ) inside props which we want to pass as a variable in a query 





