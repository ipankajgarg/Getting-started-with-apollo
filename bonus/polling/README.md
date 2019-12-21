## Polling

```javascript
startPolling(3000);
```

`startPolling` is just a function which you can access from `data property inside props (data.startPolling)`.The function takes only one integer argument which allows you to configure how often you want your query to be executed in milliseconds.

```javascript
useEffect(() => {
  console.log("start polling on first mount");
  startPolling(3000);
}, []);
```

This line of code will re-execute the query after every 3 seconds.

Similarly , `stopPolling` is a function and as it sounds like it will stop current polling process.

### But why polling and when to use it?

Polling is a good way to keep the data in your UI fresh. Consider a blog kind of application where people are creating or updating their blogs very frequently ,So there must be some way to fetch all the new blogs and show then to the user
