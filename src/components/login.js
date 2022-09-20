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
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleusername = (e) => {
    setusername(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  const handlesubmit = (e) => {
    let data = {
      email: username,
      password: password,
    };
    // const app = initializeApp({
    //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
    //   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    // });
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // if (user !== null) {
        //   // The user object has basic properties such as display name, email, etc.
        //   const email = user.email;
        //   // The user's ID, unique to the Firebase project. Do NOT use
        //   // this value to authenticate with your backend server, if
        //   // you have one. Use User.getToken() instead.
        //   const uid = user.uid;
        //   console.log(`User ${email} ${uid}`);
        // }
        console.log("The user is signed in");
        // console.log(user.accessToken);
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
    // /////////////////////////////////////////////////////////////
    // const user = auth.currentUser;
    // if (user !== null) {
    //   // The user object has basic properties such as display name, email, etc.
    //   const email = user.email;
    //   // The user's ID, unique to the Firebase project. Do NOT use
    //   // this value to authenticate with your backend server, if
    //   // you have one. Use User.getToken() instead.
    //   const uid = user.uid;
    //   console.log(`User ${email} ${uid}`);
    // }

    // /////////////////////////////////////////////////////////////
  };
  useEffect(() => {}, []);

  return (
    <div>
      Login
      <input type="text" value={username} onChange={(e) => handleusername(e)} />
      <input
        type="password"
        value={password}
        onChange={(e) => handlepassword(e)}
      />
      <button onClick={(e) => handlesubmit()}>Login</button>
      {/* <button onClick={(e) => handlelogout()}>Logout</button> */}
    </div>
  );
};
export default Login;
