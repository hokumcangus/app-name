import React from "react";
import { useState } from "react";

const Post = () => {
    console.log('rendering post')
    const [likeCount, setLikeCount] = useState(0);

    const updateLikes = () => {
        setLikeCount(likeCount + 1);
    };

    return (
        <section>
            <p>You have {likeCount} likes</p>
            <button onClick= {updateLikes}>Like</button>
        </section>
    );
};
export default Post;