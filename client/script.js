import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import {getDatabase} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js'

const firebaseConfig = {

    apiKey: "AIzaSyAK3nK6jE9nm_Crktq1nNjbdUhUxhswbOU",

    authDomain: "jsscraper-a1253.firebaseapp.com",

    projectId: "jsscraper-a1253",

    storageBucket: "jsscraper-a1253.appspot.com",

    messagingSenderId: "403768959015",

    appId: "1:403768959015:web:a67e153e458e3af685ee02",

    measurementId: "G-R7T7R8LJ58"

};

/**@type {import("@firebase/app").FirebaseApp} */
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log(database);

/**
 * 
 * @param {number} ms the amount of time to sleep for in milliseconds
 * @returns
 */
function sleep(ms) {
    return new Promise((resolve) => {setTimeout(resolve,ms)});
}

/**
 * 
 * @param {function():boolean} cond the condition to check for
 * @param {number} timeout the max amount of time that can be waited
 * @returns {Promise<boolean>}
 */
async function until(cond,{timeout=3000,delay=100}={}) {
    var passed = false;
    var timedOut = false;
    setTimeout(()=>timedOut = true,timeout);
    while(!passed && !timedOut) {
        passed = cond();
        await sleep(delay);
    }
    return passed;
}

async function test() {
    await until(()=>document.readyState === 'complete');
    console.log("ok");
}

test();