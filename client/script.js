import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js'

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

const analytics = getAnalytics(app);

console.log(analytics);

function sleep(ms) {
    return new Promise((resolve) => {setTimeout(resolve,ms)});
}

async function test() {
    console.log("ok");
}