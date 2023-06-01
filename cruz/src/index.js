const express = require('express');
const { character, logins, fav, deletfav } = require('./routes/index')
const { conn } = require('./db')
const server = express();
const PORT = 3001;




server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
      );
      res.header(
         'Access-Control-Allow-Methods',
         'GET, POST, OPTIONS, PUT, DELETE'
         );
         next();
      });
      server.use(express.json())
      server.use('/rickandmorty',character )
      server.use('/rickandmorty',logins )
      server.use('/rickandmorty',fav )
      server.use('/rickandmorty',deletfav )
      
      
      
      conn.sync({force: true})
      server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});




















// const http = require ('http');
// const getCharById = require ('./controllers/getCharById')

// http.createServer((require, response)=>{
//     response.setHeader('Access-Control-Allow-Origin', '*')

//     if(require.url.includes("/rickandmorty/character")){
//         let id = require.url.split('/').at(-1);
//         getCharById(response, id) //el + parcea a Number :) 
//     }


// }).listen(3001, 'localhost')

// const http = require('http')
// const data = require('./utils/data')

// http.createServer((require, response)=>{
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     if(require.url.includes('/rickandmorty/character')){
//         let id = Number(require.url.split('/').at(-1))
//         let character = data.find((charac)=> charac.id === id)
//         response.writeHead(200,{ 'content-type': 'application/json' })
//         response.end(JSON.stringify(character))
        
//     }

// }).listen(3001,'localhost')