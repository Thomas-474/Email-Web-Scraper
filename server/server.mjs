import { createServer, ServerResponse } from 'http';
import url from 'url';
import Path from 'path';
import { readFile, readFileSync } from 'fs';
// import {getFirestore} from 'firebase/firestore/lite'

var errdir = "C:/Users/oliver_elion/Documents/Working/Email-Web-Scraper/client"

ServerResponse.prototype.writeFile = function(filename = "",type, func = function(){}) {
    type =
    !filename.endsWith("js") ?
    !filename.endsWith("css") ?
    !filename.endsWith("png") ?
    !filename.endsWith("ico") ?
    "text/html"
    :"image/ico"
    :"image/png"
    :"text/css"
    :"text/javascript";
    readFileSync(errdir+filename,(err,data) => {
        if (err) {
            console.log(err);
        }
        else {
            this.writeHead(200, {'Content-type':type});
            this.write(data);
            func().bind(this);
        }
    })
}

const port = 8000;

const server = createServer(async(request, response) => {
    console.log(request.url);
    if (request.url == "/style.css") {
        response.writeHead(200);
        readFile(`./client/style.css`,(err,data) => {
            if(err) {
                console.log(err);
            }
            else {
                response.write(data);
                response.end();
            }
        });
    }
    else if (request.url == "/script.js") {
        response.writeHead(200, {
            'Content-Type': 'text/javascript'
        });
        readFile(`./client/script.js`,(err,data) => {
            if(err) {
                console.log(err);
            }
            else {
                response.write(data);
                response.end();
            }
        });
    }
    else if (request.url == "/") {
        response.writeHead(200);
        readFile(`./client/index.html`,(err,data) => {
            if(err) {
                console.log(err);
            }
            else {
                response.write(data);
                response.end();
            }
        });
    }
}).listen(port);