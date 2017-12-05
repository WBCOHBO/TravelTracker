import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDNCOCFYGBWsjFIOyugwMmiA66Vj0cQqlU",
  authDomain: "gpsreactnative.firebaseapp.com",
  databaseURL: "https://gpsreactnative.firebaseio.com",
  projectId: "gpsreactnative",
  storageBucket: "gpsreactnative.appspot.com",
  messagingSenderId: "689415095077"
};
firebase.initializeApp(config);
export default firebase;