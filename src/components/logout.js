import { initializeApp } from "firebase/app";
import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import key from "../serviceAccountKey.json";
// console.log(key);
const app = initializeApp({
  apiKey: "AIzaSyBJxImkN11sqrf0isD-7zTqkihyvK1A0EE",
  authDomain: "node-firebase-9e51e.firebaseapp.com",
  projectId: "node-firebase-9e51e",
  storageBucket: "node-firebase-9e51e.appspot.com",
  messagingSenderId: "664693711440",
  appId: "1:664693711440:web:5cd43ad66d8ca804c02755",
  measurementId: "G-419C4X8Y39",
});
const auth = getAuth(app);
const Logout = () => {
  const handlesubmit = (e) => {
    const user = auth.currentUser;
    if (user !== null) {
      signOut(auth)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log("nooooooooooooo");
        });
    }
  };
  // /////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////

  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={(e) => handlesubmit()}>Logout</button>
      {/* <button onClick={(e) => handlelogout()}>Logout</button> */}
    </div>
  );
};
export default Logout;
