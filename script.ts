import { initializeApp } from './node_modules/firebase/firebase-app.js';
import { getAnalytics } from './node_modules/firebase/firebase-analytics.js';
import { getDatabase, ref, set } from './node_modules/firebase/firebase-database.js';
import { serverRequest, until } from './utils';

import type {FirebaseApp} from './node_modules/@firebase/app';
import type {Database} from './node_modules/@firebase/database';

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
    
    const app:FirebaseApp = initializeApp(firebaseConfig);
    const database:Database = getDatabase(app,undefined);

    const analytics = getAnalytics(app);
    
    console.log(analytics);
}

JSMain();