var express    = require('express')
var serveIndex = require('serve-index')
var base64Img = require('base64-img');
var fs = require('fs');
var app = express()
let directory = "photos"
let dirBuf = Buffer.from(directory);
let bongBong = ''
const datum = './2pac.txt'

const responsable = fs.readFileSync('./2pac.txt', 'utf8', function(err, contents) {
    return contents
});
const sgMail = require('@sendgrid/mail');

let files = fs.readdirSync(directory)
// bongBong = params
let base64 = null
console.log(files, 'THESE ARE THE FILES')

var base64img=`${responsable}`;//shortened version
var data=base64img.replace(/^data:image\/\w+;base64,/,"");
var buffer=new Buffer(data,'base64');
fs.writeFile('./base64img.png',buffer,function(err){
  fs.readFile('./base64img.png',function(err,data){


  sgMail.send({
    to      : 'nschmidt@bmad.ca',
    from    : 'address2@gmail.com',
    subject : 'email with image from base64 data',
    files   : [{filename:'base64img.png',content:data,cid:'1234567890'}],
    html    : '<img src="cid:1234567890"/>'
    },
  function(success,message){
    if(!success){console.log(message);}
    else{
      console.log('sent');
      fs.unlink('public_html/img/base64img.png');
      }
  });});});
const test = async () => {
   const response = await base64Img.base64('./photos/virtualmirror00002.png', function(err, data) {
        base64 = data
        /*
        fs.writeFile('2pac.txt', datum, (err) => {  
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            console.log('Lyric saved!');
        });
        //return console.log(base64)

*/    
    })


  
     console.log(responsable, 'this is responsable!!!!!!')
    console.log('after calling readFile');
    const email = await sgMail.setApiKey('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');
    const msg =  await {
      to: 'nschmidtinc@gmail.ca',
      from: 'test@example.com',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
    
      html: `<img alt="My Image" src="cid:myimagecid" />`,
    };
    sgMail.send(msg);
    

}

test()
console.log(files.forEach(file => console.log(file)))
// img alt="My Image" src={base64} />


console.log(files[files.length - 1])
// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory


// 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

 
 /*
if (process.argv.length <= 2) {
    console.log(process, 'this is process!!!')
    console.log("Usage: " + __filename + " path/to/directory");
    
      console.log(filelist)
   
}

var path = process.argv[2];
 
fs.readdir(path, function(err, items) {
    console.log(process.argv, 'this is process!!!')
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(process.argv, 'this is process!!!')
        console.log(items[i]);
    }
});

app.use('/Users', express.static('Users/salmanassri/stannette'), serveIndex('Users/salmanassri', {'icons': true}))
*/
// Listen
app.listen(3000)