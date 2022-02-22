import React, {useEffect, useState} from "react";
import WordpressApi from "../../services/wordpressapi";
import {useParams} from "react-router-dom";


function Post() {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [hasRun, setHasRun] = useState(false);

    useEffect(() => {
        if(!hasRun) {
            WordpressApi.getInstance().getPostByID(id).then((res) => {
                setPost(res);
                setHasRun(true);
            });
        }
    }, [])

    return (
        <>
            <h1>{post?.title?.rendered}</h1>
            <h2>{post?.date}</h2>
            <div className='cards__container'>
                <div dangerouslySetInnerHTML={{ __html: post?.content?.rendered}}></div>
            </div>
        </>
    );
}

export default Post;
