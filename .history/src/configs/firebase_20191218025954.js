import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyDpqJBIyrttzMP0CCRv0J39O2VA_xr6KTA',
    authDomain: 'corelogic-dealer-management.firebaseapp.com',
    databaseURL: 'https://corelogic-dealer-management.firebaseio.com',
    projectId: 'corelogic-dealer-management',
    storageBucket: 'corelogic-dealer-management.appspot.com',
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId:process.env.APP_ID
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export default firebase;
