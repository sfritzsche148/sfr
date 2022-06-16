import React, { useState, use, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { dbs, auth } from '../Blog/firebase-config';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css'

function CreatePost({ isAuth }) {
  const [title, setTitel] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(dbs, "posts")
  let navigate = useNavigate();

  const CreatePost = async () => {
    await addDoc(postsCollectionRef, {title, postText, author: {name: auth.currentUser.displayName,  id: auth.currentUser.uid }
    });
    navigate('/blog');    
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [])

  return (
    <div className='createPostPage'>
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGP">
          <label>Title:</label>
          <input placeholder='Titel..' onChange={(event) => {
            setTitel(event.target.value);
          }}
          />
        </div>
        <div className="inputGP">
          <label>Post:</label>
          <textarea placeholder='Post..' onChange={(event) => {
            setPostText(event.target.value);
          }}
          />
        </div>
        <button className='blogsubbtn' onClick={CreatePost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost; 