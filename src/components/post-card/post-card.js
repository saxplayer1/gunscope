import React from 'react';
import pfp from '../../assets/pfp.jpg'
import postImage from '../../assets/postImage.jpg'
import './post-card.css';

function PostCard() {
    return(
        <div className='postCard'>
            <div className='postCard__header'>
                <img src={pfp} className='postCard__header-img' alt='pfp' />
                <span className='postCard__header-name'>
                    Test Name
                </span>
            </div>
            <img src={postImage} className='postCard__post-image' alt='postImage' />
            <div className='postCard__description'>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </div>
    ) 
}

export default PostCard;