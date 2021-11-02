console.log(process.env);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

/* const firebaseConfig = {
    apiKey: "AIzaSyBr-Kg23VOVQjqwjkEIBfGx-0q-SkQAjTw",
    authDomain: "ema-john-simple-shp.firebaseapp.com",
    projectId: "ema-john-simple-shp",
    storageBucket: "ema-john-simple-shp.appspot.com",
    messagingSenderId: "7202268357",
    appId: "1:7202268357:web:99f93350a94bc5b276fcac"
  }; */

export default firebaseConfig;