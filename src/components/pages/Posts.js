import React from 'react';
import WordpressApi from '../../services/wordpressapi';
import Footer from '../Footer';
import {useState} from 'react';

function Posts() {

    const [posts, setPosts] = useState(null);
    WordpressApi.getInstance().getPosts().then((res)=>{
        setPosts(res);
    });

  return (
    <>
    {posts.map((post) => <>{post.title.rendered}</>)}
    </>
  );
}

export default Posts;