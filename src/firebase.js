import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCd0XXrXGYta7njWOdFgfiJj6elCLx-seQ',
  authDomain: 'my-test-project-5efb8.firebaseapp.com',
  databaseURL: 'https://my-test-project-5efb8.firebaseio.com',
  projectId: 'my-test-project-5efb8',
  storageBucket: 'my-test-project-5efb8.appspot.com',
  messagingSenderId: '577520364558'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
