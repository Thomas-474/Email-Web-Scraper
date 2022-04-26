import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js';
import { serverRequest, until } from './utils';

async function JSMain() {
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
    /**@type {import("@firebase/database").Database} */
    const database = getDatabase(app);

    const analytics = getAnalytics(app);
    
    console.log(analytics);
}

JSMain();