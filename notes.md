# Full-stack MERN app

## Dependencies
Server
- body-parser: parse HTTP requests
- cors: Cross Origin Resource Sharing (allows making requests for a resource served on another website/domain)
- express: web framework built on node.js for fast development and routing 
- mongoose: MongoDB tool
- nodemon: resets server everytime a change is made

Client
- axios: HTTP client for browser
- moment: working with date/time
- react-file-base64: for converting images
- redux: managing and centralizing app state
- redux-thunk: used with redux to manage async requests
- @material-ui/core: for UI


## Reference docs
Client side - React
Server - Node.js

Run ```npx create-react-app ./``` in client to initialize app.
Add ```"type":"module"``` in server/index.js for easy imports after "main" and ```"start": "nodemon index.js"``` under "scripts"
