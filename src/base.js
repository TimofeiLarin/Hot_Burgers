import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCIo479nyZCFzcljqfhWhUB8W8LuwrKauU',
  authDomain: 'hot-burgers-58.firebaseapp.com',
  databaseURL: 'https://hot-burgers-58-default-rtdb.europe-west1.firebasedatabase.app',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
