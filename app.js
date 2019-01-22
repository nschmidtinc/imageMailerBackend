var express    = require('express')
const app = express()
var serveIndex = require('serve-index')
var base64Img = require('base64-img');
var fs = require('fs');
let directory = "photos"
let dirBuf = Buffer.from(directory);
const sgMail = require('@sendgrid/mail');
const datum = './2pac.txt'
let files = fs.readdirSync(directory)
let base64 = null
import bodyParser from 'body-parser'

import {emailApp}  from './emailApp';

app.use(bodyParser())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
console.log(files, 'THESE ARE THE FILES')
app.post('/sendMyPicture', async function(req, res) {

    //const bing = JSON.stringify(req)
   console.log(req, 'this is body!!!!!!!!!!!!!!')
    // let bod = JSON.parse(req.body)
   // console.log(bod)
 const thisIsIt = await emailApp(req.body.email)
res.send('you sent the email!')


})
app.get('/', async function(req, res) {

  //const bing = JSON.stringify(req)
 console.log(req, 'this is body!!!!!!!!!!!!!!')
  // let bod = JSON.parse(req.body)
 // console.log(bod)
const thisIsIt = await emailApp(null)
res.send(thisIsIt)


})
app.listen(5000)