# Sound recorder
### Setup

0. Install nodejs. 

1. Optional: Install [nodemon](https://github.com/remy/nodemon) globally. 

```
npm i nodemon -g
```

2. Run **npm install** to install dependencies

3. Open two terminal tabs. Fire up the client with **npm run client** in one terminal to run the UI, and the server with **npm run server** in another terminal. Alternatively you can start the server with the command **node index.js**

4. Go to **localhost:3000** to see the UI. Click Record, make sounds, then hit the Stop button

5. Each new sound recording is saved on the server. Go to **/uploads** to see the **timeStamp.ogg** file
