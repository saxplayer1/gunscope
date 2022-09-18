import React from 'react';
import PostCard from "../components/post-card/post-card";
import PostCreation from "../components/post-creation/post-creation";
import "./PostsPage.css"
import {gun} from "./AuthPage";

function PostsPage() {
    let posts = [];
    gun.get('posts').map().on((post) => {
        if (post.id) {
            posts.push(post)
        }
    })
    posts = posts.reverse();
    return(
        <div className={"postsPage"}>
            <div>
                {posts.map((post, index) => {
                    return <PostCard post={post} key={index}/>
                })}
            </div>
            <div>
                <PostCreation />
            </div>
        </div>
    )
}

export default PostsPage;