# Section 4: How Node.js Works: A Look Behind the Scenes 

## Section Intro 
- We wil learn about Node.js Architectures, streams, modules, and more 

## Node, V8, Libuv and C++ 
- The Node.js Architecture behind the scenes 
  - Dependent on 
    - V8 - convert JS code into machine code the computer can understand 
      - Written in JS & C++ 
    - Libuv - open source library on asynchronous I/O 
      - Written in C++ 
      - Event Loop 
        - For harder work 
      - Thread Pool 
        - More heavy work 
    - http-parser
    - c-ares
    - OpenSSL
    - zlib 
  - Node.js ties all these libraries together and gives us access in pure JS 

## Processes, Threads and the Thread Pool 
- Node Process and threads 
  - Node.js Process - instance of a program in execution on a computer 
    - Single thread - sequence of instructions  
      - Intialize program --> Execute "top-level" code --> Require modules --> Register event callbacks --> Start event loop 
    - Thread Pool 
      - Additional 4 threads (or more)
      - Offload work from the event loop (all this is done bwhind the scnes)
      - Handle heavy ("expensive") tasks:   
        - File system APIs 
        - Cryptography 
        - Compression 
        - DNS lookups 

## The Node.js Event Loop 
- The heart of Node.js: The Event Loop 
  - Node.js Process -> Single thread -> Event loop 
  - Event loop 
    - All the application code that is inside callback function (non-top-top-level code)
    - Node.js is built around callback functions 
    - Event-driven architecture: 
      - Events are emitted 
      - Event loops pick them up 
      - Callbacks are called 
    - Event loop does orchestration 
- The event loop in Detail 
  - Event Loop 
    - Start -- Callback queues --> Expired timer callbacks (processed one by one) --> I/O polling and callbacks (I/O netowrking and file access) --> setImmediate callbacks --> Close callbacks --> any pending timers or I/O taks? 
      - Yes -- keeps running 
      - No -- Exit program 
  - There are two other microtask queues - this is for called resolved promises 
    - Process.nexttick() queue 
    - Other microtasks queue (resolves promises)
- Summary of the event loop: Node vs. others 
  - Node --> single thread 
  - PHP --> new thread 
  - Don't Block 
    - Don't use sync versions of functions in fs, crypto and zlib modules in your callback functions 
    - Don't perform complex calculations (e.g. loops inside loops)
    - Be careful with JSON in large objects 
    - Don't use too complex regular expressions (e.g. nested quantifiers)

## The Event Loop in Practice 
- We will write a bunch of code and then figure out in which order they should be executed in the event loop and see if they make sense 
- The event loop actually waits for stuff to happen in the I/O callbacks phase (until there is an expired timer)
- Process.nexttick() -- happens before the next loop phase 
  - Either stick to setImmediate or nextTick, but setImmediate is preferred 

## Events and Event-Driven Architecture 
- The Event-Driven Architecture 
  - Event emitter -- Emits Events --> Event listener -- Calls --> Attached callback function 
  - Example 
    - Creating a server -- see theory lectures for example diagram 
    - Instance if EventEmitter class 
- Similar to the observer pattern 

## Events in Practice 
- Our event emitter is a class 
- Our requests are showing twice because it calls the favicon along with the url 

## Introduction to Streams 
- What are streams?
  - Streams
    - Used to process (read and write) data piece by pece (chunks), without completing the whole read or write operation, and therfore without keeping all the data in memory 
    - Examples 
      - Netflix 
      - YouTube
    - Perfect for handling large volumes of data, for example videos 
    - More efficient data processing in terms of memory (no need to keep all data in memory) and time (we don't have to wait until all the data is available)
- Node.js Streams fundamentals 
  - Streams are instances of the EventEmitter class!  
  - Readable and weritable streams are the most important 
  - Readable Streams 
    - Description
      - Streams from which we can read (consume) data 
    - Example 
      - http requests 
      - fs read streams 
    - Important Events 
      - data 
      - end
    - Important Funcctions 
      - pipe() -- allows us to plug streams together 
      - read() 
  - Writable Strems 
    - Description 
      - Streams to which we can write data 
    - Example 
      - http responses 
      - fs write streams 
    - Important Events 
      - drain 
      - finish 
    - Important Functions 
      - write() 
      - end() 
  - Duplex Streams 
    - Description 
      - Streams that are both readble and writable
    - Example 
      - net web socket 
    - Important Events 
    - Important Functions 
  - Transform Streams 
    - Description 
      - Duplex streams that transform data as it is written or read 
    - Example 
      - zlib Gzip creation
    - Important Events 
    - Important Functions 
  - We can consume these streams, we don't really need to know how to implement them 

## Streams In Practice 
- Our readble stream is causing back pressure
  - Back pressure: happens when the response cannot send the data as fast as it is receiving it from the file 
- This is where the .pipe() comes in handy 

## How Requiring Modules Really Works 
- The CommonJS module system 
  - Each JavaScript file is treated as a separate module 
  - Node.js uses the CommonJS module system: require(), exports or module.exports 
  - ES module system is used in browsers: import/export 
  - There have been attempts to bring ES modules to node.js(.mjs)
- What happens when we require() A Module 
  - resolving and loading -> wrapping -> execution -> returning exports -> caching 
  - Resolving and loading
    - Core modules 
      - require('http')
    - Developer modules 
      - require('./lib/controller')
    - 3rd party modules (from NPM)
      - require('express')
    - Path resolving: how node decides which module to load 
      - Start with core modules 
      - If begins with './' or '../' -> try to load developer modules 
      - If no file found -> Try to find folder with index.js in it 
      - Else -> Go to node_modules/ and try to find module there 
  - Wrapping
    - Uses an iffy function, takes in exports, require, modules, __filename, __dirname
    - require: function to require modules
    - module: reference to the current module 
    - exports: a reference to module.exports, used to export object from a module 
    - __filename: absolut path to the current module's file
    - __dirname: directory name of the current module 
  - Execution 
    - require function returns exports of the required module
    - module.exports is the returned object (important!)
    - Use module.exports to export one single variable, e.g. one class or one function (module.exports = Calculator)
    - Use exports to export multiple named variables (exports.add = (a,b) => a + b)
    - This is how we import data from one module into another 
  - Caching 
    - Cached after the first time they are loaded, the code in the modules is only executed after the first call 

## Requiring Modules In Practice 
- arguments - is an array in JS that shows us all of the variables in the Module 
- module.exports - used to export one single value, exactly what is returned from one module
- You can immediately assign the value you want to module.exports
- We can also add to our exports as well 
- We can also use ES6 destructuring to destructure the object we get