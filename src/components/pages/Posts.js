import React, {useEffect, useState} from 'react';
import WordpressApi from '../../services/wordpressapi';
//import CardItem from "../CardItem";
import PostItem from "../PostItem";

function Posts() {

    const [posts, setPosts] = useState(null);
    const [hasRun, setHasRun] = useState(false);

    useEffect(() => {
        if(!hasRun) {
            WordpressApi.getInstance().getPosts().then((res) => {
                setPosts(res);
                setHasRun(true);
            });
        }
    }, [])


  return (
    <>
        <h1>Noticias:</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                {posts && posts.map((post) =>
                    <div>
                        <PostItem
                            src={post['jetpack_featured_media_url']}
                            text={post.excerpt.rendered}
                            path={'/post/' + post.id}
                        />
                    </div>
                )}
            </div>
        </div>
    </>
  );
}

export default Posts;
