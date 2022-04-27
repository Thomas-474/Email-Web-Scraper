const http = require('http');
const createServer = http.createServer;
const ServerResponse = http.ServerResponse;
const fs = require('fs');
const readFile = fs.readFile;
const mime = require('mime-types');
const initializeApp = require('firebase/app').initializeApp;
const getDatabase = require('firebase/database').getDatabase;
const ref = require('firebase/database').ref;
const set = require('firebase/database').set;

const firebaseConfig = {

    apiKey: "AIzaSyAK3nK6jE9nm_Crktq1nNjbdUhUxhswbOU",

    authDomain: "jsscraper-a1253.firebaseapp.com",

    projectId: "jsscraper-a1253",

    storageBucket: "jsscraper-a1253.appspot.com",

    messagingSenderId: "403768959015",

    appId: "1:403768959015:web:a67e153e458e3af685ee02",

    measurementId: "G-R7T7R8LJ58"

};

const app = initializeApp(firebaseConfig);

// import {getFirestore} from 'firebase/firestore/lite'

var serverDir = __dirname.replace("\\server","");
console.log(serverDir);
ServerResponse.prototype.readFile = function(reqUrl,node=false) {
    return new Promise((resolve,reject) => {
        readFile(serverDir+reqUrl,(err,data) => {
            if (err) {
                reject(err);
            }
            else {
                let look = mime.lookup(node ? "js":reqUrl);
                if (reqUrl.endsWith(".ts")) {
                    look = "text/javascript";
                }
                this.writeHead(200, {'Content-Type':look});
                resolve(data);
            }
        })
    })
}

ServerResponse.prototype.writeFile = async function(reqUrl,node=false) {
    return this.readFile(reqUrl,node)
    .then((data)=>{
        this.write(data);
    })
    .catch((err)=>{console.log(err)});
}

const port = 8000;
const hostname = 'localhost';

const server = createServer(async(request, response) => {
    if (request.method === 'POST') {
        let body = "";
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', ()=>{
            let returnValue = "ok";
            let data;
            try {
                if(body.includes("{")) {
                    data = JSON.parse(body);
                }
                else {
                    data = body;
                }
            }
            catch {
                data = body;
            }
            console.log(data);

            if (data === 'app') {
                returnValue = JSON.stringify(app);
            }
            response.end(returnValue);
        });
    }
    else {
        let req = request.url;
        if (req === "/utils") req = "/utils.js";
        console.log(req);
        if(!["/"].includes(req) && !req.includes("node_modules")) {
            await response.writeFile(req);
            response.end();
        }
        else if (req == "/") {
            await response.writeFile("/index.html");
            response.end();
        }
        else if (req.includes("node_modules")) {
            await response.writeFile(req,true);
            response.end();
        }
    }
}).listen(port,hostname);