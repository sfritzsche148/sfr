import React from 'react';
import { auth, provider } from  './firebase-config'
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';

function Login({setIsAuth}) {

  let navigate = useNavigate();
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate('/createPost');
    })
  };
  return (
    <div className='loginPage'>
      <h3>Sign In With Google to Continue</h3>
      <button className='logingooglebtn' onClick={signInWithGoogle}>
        <FcGoogle className='loginicon' />Sign in with Google
      </button>
    </div>
  )
}

export default Login;