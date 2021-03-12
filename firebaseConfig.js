import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyC_MiWrwXS33W1OiR4o_AsoKLxGNZIMcgU",
    authDomain: "sparta-myhoneytip-97bce.firebaseapp.com",
    databaseURL: "https://sparta-myhoneytip-97bce-default-rtdb.firebaseio.com",
    projectId: "sparta-myhoneytip-97bce",
    storageBucket: "sparta-myhoneytip-97bce.appspot.com",
    messagingSenderId: "298527577195",
    appId: "1:298527577195:web:56f9f6bda5bbdd23ad0d2e",
    measurementId: "G-4TM0RNMX4W"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()