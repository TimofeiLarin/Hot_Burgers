import Rebase from 're-base';
import firebase from 'firebase/app';
require('firebase/database');

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCIo479nyZCFzcljqfhWhUB8W8LuwrKauU',
  authDomain: 'hot-burgers-58.firebaseapp.com',
  databaseURL: 'https://hot-burgers-58-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'hot-burgers-58',
  storageBucket: 'hot-burgers-58.appspot.com',
  messagingSenderId: '734854560409',
  appId: '1:734854560409:web:f4752be4ccd93db7f6d608',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebase };
export default base;
