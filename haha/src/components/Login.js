import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
    <marquee>
    <img src="sand.png"/>
    </marquee>
      <div id="login-card">
      <h2 className="title">WELCOME TO <t1>SA</t1><t2>N</t2><t3>देश</t3></h2>

        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br />
        <br />

        
        
        
          
        

        
      </div>
    </div>
  );
};

export default Login;