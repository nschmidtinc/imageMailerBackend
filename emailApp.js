var express    = require('express')

var serveIndex = require('serve-index')
var base64Img = require('base64-img');
var fs = require('fs');
var app = express()
let directory = "photos"
let dirBuf = Buffer.from(directory);
const sgMail = require('@sendgrid/mail');
const datum = './2pac.txt'

let files = fs.readdirSync(directory)
let base64 = null

export function emailApp(theEmail) {

    const convertPicture = (imageString) => {
        var data = base64Img.base64Sync(`./photos/${imageString}`);
    return data
    }
    
    const writeToDisk = (fileName,base64String) => {
        fs.writeFileSync(`base64${fileName}.txt`, base64String, (err) => {  
            // throws an error, you could also catch it here
            if (err) throw err;
            // success case, the file was saved
        });
        const responsable =  fs.readFileSync(`base64${fileName}.txt`, 'utf8', function(err, contents) {
            return contents
        });
        return responsable
    }
    const emailImage = writeToDisk(files[files.length - 1],convertPicture(files[files.length - 1]))
    
    const sendMail = async (b64Pic, emailAddy) => {
        const email = await sgMail.setApiKey('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');
        const msg =  await {
          to: `${emailAddy}`,
          from: 'test@example.com',
          subject: 'Sending with SendGrid is Fun',
          text: 'and easy to do anywhere, even with Node.js',
        
          html: `<img alt="My Image" src=${b64Pic} />`,
        };
        sgMail.send(msg);
        
    }
    
    const sent = sendMail(emailImage, `${theEmail}`)
    console.log(sent, 'this is sent')
    
        //console.log(data)
        /*
    
    }
       const response = base64Img.base64(imageString, async function(err, data) {
            base64 =  await data
            
            return data
    
     
        })
    
    console.log(response, 'response!!!')
    */
        /*
        console.log(response, 'this is image string!!!!')
            fs.writeFile(`base64${imageString}.txt`, base64, (err) => {  
                // throws an error, you could also catch it here
                if (err) throw err;
            
                // success case, the file was saved
                console.log('Lyric saved!');
            });
            */
        //const responsable =  fs.readFileSync('./2pac.txt', 'utf8', function(err, contents) {
        //    return contents
       // });
        
        // console.log(responsable, 'this is responsable!!!!!!')
    
        /*
        console.log('after calling readFile');
        const email = await sgMail.setApiKey('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');
        const msg =  await {
          to: 'nschmidtinc@gmail.com',
          from: 'test@example.com',
          subject: 'Sending with SendGrid is Fun',
          text: 'and easy to do anywhere, even with Node.js',
        
          html: `<img alt="My Image" src=${responsable} />`,
        };
        sgMail.send(msg);
        
    */
    
    
    
    //test(files[files.length -1])
    console.log(files.forEach(file => console.log(file)))
    // img alt="My Image" src={base64} />
    
    
    //console.log(files[files.length - 1])
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
    }