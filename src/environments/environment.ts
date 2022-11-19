// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDSJJhs9DeKx6Ex6egtF8z1ptKypb8kg7M',
    authDomain: 'firechat-a9469.firebaseapp.com',
    projectId: 'firechat-a9469',
    storageBucket: 'firechat-a9469.appspot.com',
    messagingSenderId: '653791023517',
    appId: '1:653791023517:web:ce824a1cecc2ae1c4e5f74',
  }
};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDSJJhs9DeKx6Ex6egtF8z1ptKypb8kg7M",
//   authDomain: "firechat-a9469.firebaseapp.com",
//   projectId: "firechat-a9469",
//   storageBucket: "firechat-a9469.appspot.com",
//   messagingSenderId: "653791023517",
//   appId: "1:653791023517:web:ce824a1cecc2ae1c4e5f74"
// };

// // Initialize Firebase
// const app = initializeApp( firebaseConfig );

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
