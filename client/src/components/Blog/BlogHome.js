import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { dbs } from '../Blog/firebase-config';
import './BlogHome.css';

function BlogHome() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(dbs, "posts")

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(dbs, "posts", id);
    await deleteDoc(postDoc);
  }
  return (
    <div className='blogHome'>{postLists.map((post) => {
      return( <div className='post'>
        <div className='postHeader'>
          <div className='postTitle'>
            <h1>{post.title}</h1>
          </div> 
          <div className='deletePost'>
            <button className='deletePostbtn' onClick={() => {
              deletePost(post.id);
            }}
            > &#128465; </button>
          </div>
        </div>
        <div className="postTextContainer">
          {post.postText}
        </div>
        <h4>Autor: {post.author.name}</h4>
      </div>
      );
    })}
   </div>
  )
}

export default BlogHome;