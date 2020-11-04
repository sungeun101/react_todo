import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC9Bi1XYTeVW9-gKEQ_TtFJLt4_ljlk3QQ',
  authDomain: 'todolist-3cb6d.firebaseapp.com',
  databaseURL: 'https://todolist-3cb6d.firebaseio.com',
  projectId: 'todolist-3cb6d',
  storageBucket: 'todolist-3cb6d.appspot.com',
  messagingSenderId: '291061215148',
  appId: '1:291061215148:web:1fa5f5abcfff889ac21409',
});

const db = firebaseApp.firestore();
export default db;
