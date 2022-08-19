import React from 'react';
import PostCard from "../components/post-card/post-card";
import PostCreation from "../components/post-creation/post-creation";
import "./PostsPage.css"

function PostsPage() {
    return(
        <div className={"postsPage"}>
            <div>
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div>
                <PostCreation />
            </div>
        </div>
    )
}

export default PostsPage;