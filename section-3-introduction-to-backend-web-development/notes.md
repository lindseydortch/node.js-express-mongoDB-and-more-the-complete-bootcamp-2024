# Section 3: Introduction to Back-End Web Development 

## Section Intro 
- Before we dive deep into API's and other backend development, we will dive deep into how the backend works 

## An Overview of How the Web Works 
- What happens when we access a webpage? 
  - Request-response model or Client-Server architecture 
    - Client (e.g. browser) --- REQUEST ---> Server --- Response ---> Client 
    - DNS --> DNS Lookup <-- Client -- https://www.(Protocol HTTP ir HTTPS)google.com(Domain name)/maps(Resource)
      - The broswer makes a request to the DNS lookup which is converted into an IP
        - Usually done though an ISP 
    - What we get back from the DNS before conversion 
      - https://(Protocol HTTP or HTTPS)216.58.211.206(IP Adress).443(Port Number: default 443 for HTTPS, 80 for HTTP)
      - Port number has nothing to do with our resource, our resource gets sent through the request 
    - Client <-- TCP/IP socket connection -- HTTP Request --> Server
      - TCP is usually kept alive until all the files are loaded for the site 
      - TCP - Transmission Control Protocol 
      - IP - Internet Protocol 
      - Communications protocols that defines how data moves throughout the internet
      - A communication protocol is a system of rules that allows two or more parties to communicate 
        - HTTP is one of these along with TCP and IP 
      - HTTP Request
        - Start line: HTTP method + request + HTTP version 
        - HTTP request headers (many different possibilities)
        - Request body (only when sending data to server, e.g. POST)
    - We send back an HTTP Response from ther server 
      - HTTP Response 
        - Start line: HTTP version + status code + status message 
        - HTTP response headers (many different possibilities)
        - Response body (most responses)
  - What we get back 
    - index.html is the first to be loaded 
      - Scanned for assets: JS, CSS, images 
        - Process is repeated for each file 
  - TCP/IP 
    - TCP - break up the request into packets 
    - IP - send and route all of these packets to through the internet 

## HTTP in Action 
- Go to the network tab and disable cache
- You can see the resourse which we talked about in the last video  

## Front-End vs. Back-End Web Development
- Front-end and Back-end 
  - Frontend 
    - Browser 
    - Uses HTML, CSS and JavaScript, React, Angular, GraphQL, etc. 
      - This is what is called their frontend stack 
  - Backend 
    - Web server -- not visible to the user 
    - A basic server is a computer which is connected to the internet and holds things like the HTTP Server and Files 
    - Static server - can only show to the client via HTTP 
    - Dynamic 
      - HTTP Server <--> App <--> Files 
      - Web server <--> Database 
    - Things that cna be handled 
      - Perform logins
      - Manipulate data 
      - and much more 
    - Stack for this course 
      - Node and MongoDB 
    - You can use PHP, MySQL 
  - Full Stack 
    - Frontend and backend development together 
  - You can use Node.js for iOT, but that's not the focus of the projects here 

## Static vs. Dynamic vs. API
- Static websites vs dynamic websites 
  - Static 
    - HTML + CSS + JS <--> Broswer --> Website 
      - JavaScript does not equal dynamic 
  - Database 
    - Database --> Get Data --> Build Website <-- Template 
      - --> HTML + CSS + JS <--> Broswer -- Website
    - Database through HTML + CSS + JS is called server-side rendering 
    - Web application = Dynamic website + functionality
    - Server-side rendered 
- Dynamic Websites vs API-Powered websites 
  - Database --> Get Data ---> JSON <--> Browser --> Build website --> Website 
  - You build an API and then consume the API
  - The building moved from the server to the client 
  - Client-side rendered 
- One API, many consumers 
  - API 
    - Can send JSON to: 
      - Browsers
      - Native Mobile App 
        - iOS 
        - Android 
      - Native App 
        - MacOS 
        - Windows
  - Allows us not to be trapped onto just one platform 
    - So you can get your data for a client in different ways 