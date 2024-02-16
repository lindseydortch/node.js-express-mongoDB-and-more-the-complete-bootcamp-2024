# Section 5: [Optional] Asynchronous JavaScript: Promises and Async/ Await

## Section Intro 
- We have better tools to write asynchronous code 
  - Promises 
  - Async/Await 

## The Problem with Callbacks: Callback Hell 
- To do an http request, we will use superagent instead of the node.js included modules 
- Callbacks make our code messy and it becomes a nightmare to maintain code like this 
  - Whenever you see a triangular shape, it means you are in callback hell 

## From Callback Hell to Promises 
- Superagent has support for promises outside of the box 
- For now we are learning how to consume promises 
- Promises - doesn't have a value yet, because it is still getting data in the background
  - It's still a pending promise 
  - We consume it and then wait for it to come back with the data
  - We use the .then() method to accomplish this
    - We can chain these promises to each other instead of nesting callbacks in 
  - Resolved promises is what gets the data, it can be fulfilled or rejected (comes from an error)
    - With the .catch() helps us get rid of the guard clause in the if 

## Building Promises 
- We will promisfy the read and async file functions 
  - Our Promise takes in an executable function 
- A promise doesn't always have to return a meaningful value
- To avoid multiple levels of .then(), we return the promise from the first .then() handler 
- The key is to always return a promise so then we can keep using the .then()  

## Consuming Promises with Async/Await 
- Instead of consuming promises, we can use async/ await 
- Makes it a lot easier to consume promises
- async - means this function wil be asynchronous 
  - They will do asynchronous work without blocking the event loop 
- With async/ await we stop the code from running at the promise and then wait until it comes back with its value and then store that value in a variable 
- We use a try/catch for all of our code 
- Async/await allows us to make our code look more synchronous 
  - Syntactic sugar for promises 

## Returning Values from Async Functions 
- Remidner: async functions run in the background 
  - They don't stop the execution of our main thread 
  - It offloads our async function and then goes to the next line
  - The value we return from an async function is a resovled promise 

## Waiting for Multiple Promises Simultaneously 
- We will take an await from getting the data and then save into a Promise.all() 