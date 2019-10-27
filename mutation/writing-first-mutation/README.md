
### Mutation


- As we know how to fetch data from our backend using Apollo Client, now the next step is to learn how to post, update data with mutations.

- Syntax of mutation is almost identical to query the only differences are

###### Query

```javascript
query{
   Nameofquery(args:types){
       data
   }
}
```
- query keyword while writing query is optional


###### Mutation

```javascript
mutation Name($args:type){
   NameofMutation(args:$args){
       data
   }
}
```

- mutation keyword is mandatory
- Name could be anthing
-  args are the arguements that we will pass while executing mutation(Will see the implementation in the next section)


**Let's execute and post data in the next section


