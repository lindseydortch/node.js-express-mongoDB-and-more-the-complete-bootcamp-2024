# Section 2: Introduction to Node.js and NPM 

## Section Intro
- We will build a small and fun project, we won't worry about how things work behind the scenes, we will learn this in later sections

## What Is Node.js and Why Use It? 
- What is Node.js?
  - Node.js is a JavaScript runtime built on Google's open source V8 JavaScript Engine
- Node.js: JavaScript outside of the browser 
  - Browser 
  - Node.js outside of the browser 
    - V8 egine comes into play  
  - How the code in JS is executed 
- JavaScript on the server
  - Perfect conditions for using Node.js as a web server 
    - We can use JavaScript on the server-side of web development 
      - Build fast, highly scalable network applications (back-end)
- Why and when to use Node.js 
  - Node.js Pros 
    - Single-threaded, based on event driven, non-blocking I/O model 
    - Perfect for building fast and scalable data-intensive apps 
    - Companies like Netflix, Uber, PayPal, Ebay have started using node in production 
    - JavaScript across the entire stack: faster and more efficient development 
    - NPM: huge library of open-source packages available for everyone for free
    - Very active developer community 
  - Use Node.js 
    - API with database behind it (preferably NoSQL)
    - Data streaming (think YouTube)
    - Real-time chat application 
    - Server-side web application
  - Don't use 
    - Applications with heavy server-side processing (CPU intensive)
      - Rails 
      - php 
      - Python

## Running JavaScript Outside the Browser 
- Typing `node` in the terminal brings it into the REPL
  - To exit, you can right .exit or control + D 
- At the end of the day node.js is a JS runtime 
- Command + K will clear your command line 
- Hitting tab twice gives us all of the global variables and stuff that belong to node and JS 
  - _{variable} -- basically means our previos result 
  - If you type out something like String. and it will open all of the methods you can do for that type 

## Using Modules 1: Core Modules 
- Normally in the browser we include a JS file in our html file, but with node.js we can see it in the terminal 
  - To run in the terminal you write `node fileName`
- In Node.js we can read files from the file system 
- Node.js is built around the concept of Modules 
  - `const fs = require("fs");`

## Reading and Writing Files 
- We will be using .readFileSync
  - Sync stands for synchronous 
  - There is also an asynchronous version 

## Blocking and Non-Blocking Asynchronous Nature of Node.js 
- Synchronous vs. Asynchronous Code (Blocking vs. Non-Blocking)
  - Synchronous 
    - --> Blocking code 
      - Since one line can only be executed at a time 
  - Asynchronous 
    - --> Non-blocking
      - Takes heavy chunks of running code to make the code non-blocking 
- The Asynchronous Nature of Node.js: An Overview 
  - Node.js Process -- this is where our app runs 
    - Single thread -- this is where our code is executed. Only on thread. 
      - All users access the same thread, the code run for each user will be done in the same place, this is true for 5 users or 5 million 
  - Synchronous Way 
    - Blocks the execution when one user is reading a large text file and then the other users can execute their tasks when that file is done reading 
    - It's your job as a developer to avoid this kind of situation
  - Asynchronous Way 
    - Heavy work is done in the "background"
      - Background -- this is where time-consuking tasks should be executed 
    - Non-blocking I/O model 
      - I/O - input/output 
      - This is why we use so many callback functions in Node.js
      - Callbacks does not equal asynchronous 
- PHP -- you get one new thread  for each new user, which is a different paradigm and different than node.js because the creator found this was the best solution to building highly performant web apps 
- The Problem: Callback Hell....
  - See example in theory slides 
  - Solution: using promises or async/await [optional section]
- Node was deisgned around callbacks, so that is what we'll use for now 

## Reading and Writing Files Asynchronously 
- Node.js is built around callbacks in order to implement an asynchronous behavior 
- Most of the time you call for an error and the data in your callback and the error is usually the first parameter

## Creating a Simple Web Server 
- We will use the http module
  - http gives us networking capabilities 
- In order to build our server, we have to create the server and then start the server so we can listen to incoming requests 
- We get access to req and res in our createServer() function 
- Res is the response, gives us a lot of tools for dealing with what is sent out 
- Req is the request and all of the information we get when a req comes in 
- listen() takes in a port, and the localhost, and we can pass in a callback function as soon as the server starts listening 
  - Doesn't exit the application because of the event loop 
  - The whole goal is to wait for requests to come in 

## Routing 
- The code we wrote doesn't respond to the URL we are requesting 
- Routing means implementing different actions for the URL we have 
- Routing can become very complicated in bigger applications, so we use express, but for now we will use Node to get used to writing it and we will use Express in another bigger project for this course 
- req.url will return the / and then the favicon as well, so you will get two results because the browser calls for the favicon as well 
- When sending back a response, you can also send back a status code with the response 
  - For example when the page is not found, you can send back a 404 
- An HTTP header is a piece of information about the response we are sending back 
  - There are many headers we can specify 
  - Headers need to be set before the response 
- These routes have nothing to do with the files and folders in our filesystem 

## Building a (Very) Simple API 
- API - a service from which we can request some data 
- JSON is a very simple text format that looks a lot like a JavaScipt object 
  - The keys have to be a string 
- All node scripts get access to __dirname, it is best practice to use this variable
- We will use the synchronouse version because it blocks the code execution to read our data so it doesn't call multiple time
  - The callback gets called every time a route is hit, it doesn't matter outside 

## HTML Templating: Building the Templates 
- The first step is to build the templates, and we will build them starting with the product details page
- We replaced all the static pages with all of the info we'll needfor our templates

## HTML Templating: Filling the Templates 
- We can read our templates to memory right at the beggining 

## Parsing Variables From URLs
- We use the url module in order to parse variables right off of the URL 
  - We will use the query and the pathname to from the url.parse() function 
  - url.parse() takes in the url and then set to true or false

## Using Modules 2: Our Own Modules 
- We can create our own modules and export something from them like a function and import this function into another file
- In Node.js every single file is created as a module
- We can use module.exports to export anonymous functions 
  - exports is a property on the modules object that we have access to in every file 
- We use require to import this file into our index.js

## Introduction to NPM and the package.json File Structure 
- NPM - node package manager 
  - Automatically comes with Node.js 
  - All open source repositories (packages)
  - Largest software registry in the world
  - Used across all development, not just in node.js, but on the frontend itself  

## Types of Package and Installs 
- There are two types of dependencies we can install 
  - Simple dependencies - code on which we build our own application 
    - Our project and our code depends on these to work correctly 
  - Development dependencies - usually tools for development - not needed for production, we simply use them to develop our applications 
    - Code bundler, testing library 
    - To download as a dependency = `npm i nodemon --save-dev`
    - These show up as devDependencies in our package.json 
- There are two types of installs 
  - We did this locally 
    - We end up with dependencies of the our dependencies 
  - Global installs 
    - Will be available anywhere 
    - Should be installed globally when it provides an executable command you can run from the command line 
- Now to run our app using nodemon, we can use `nodemon index.js`
- Had we not installed nodemon globally, then we would put it in our scripts in our package.json and then we would run that script 

## Using Modules 3: 3 Party Modules 
- When using npm, you can look for the documentation on the package on npm 

## Package Versioning and Updating 
- Version numbers 
  - Semantic version number, always express with 3 numbers: major.minor.patch 
    - Patch - used to fix bugs 
    - Minors - some new features into the package, does not include breaking changes -- so it is backwards compatable 
    - Major - Whenever it is a huge new release that could break previous versions 
- Updating packages 
  - ^ -- this means we accept patch and minor releases 
  - We can write npm outdated 
  - You can also install packages at a certain package number 
  - ~ -- only accepts patch relseases -- this is the safest option 
  - `npm update <packageName>`
  - * -- all of the versions -- even the ones with breaking changes 
- Deleting packages 
  - `npm uninstall <packageName>` 
  - Will delete it from the package.json and from the node_modules folder 
- Working on projects with other people 
  - The node_modules folder is never shared because it can all be used via npm 
  - If you delete the folder all you have to do is just npm i 
- The package-lock.json 
  - This includes all of the packages we are using 
  - This is important so this works between different computers 
- Always share your package.json and package-lock.json 

## Setting Up Prettier In VS Code 
- DotENV is useful for highlighting environmental variables 
- Prettier is very opinionated 
  - Better because this is one last thing we have to do 
  - Automatically does our semicolons for us 
  - You can look at the docs to see all the stuff you can configure with Prettier 
  - You can change the printWidth and specify how many characters you want before it breaks the line and wrap it 

## Recap and What's Next 
- You can create a small demo project using what you've learned here 
- The next two sections are very theoretical