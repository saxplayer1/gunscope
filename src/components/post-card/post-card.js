import React, {useState} from 'react';
import pfp from '../../assets/pfp.jpg'
import postImage from '../../assets/postImage.jpg'
import './post-card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import * as RegularIcons from "@fortawesome/free-regular-svg-icons"
import {gun} from "../../pages/AuthPage";

function PostCard(props) {
    let post = props.post;
    const [liked, setLiked] = useState(true);
    function switchLiked() {
        if (liked) {
            gun.get('posts').get(post.id).get('likes').then((likes) => {
                likes += 1;
                post.likes += 1;
                gun.get('posts').get(post.id).get('likes').put(likes)
            })
        } else {
            gun.get('posts').get(post.id).get('likes').then((likes) => {
                likes -= 1;
                post.likes -= 1;
                gun.get('posts').get(post.id).get('likes').put(likes)
            })
        }
        setLiked(!liked)
    }

    return (
        <div className='postCard'>
            <button className={"like-btn"} onClick={() => switchLiked()}>
                {liked
                    ? <FontAwesomeIcon
                        className={"like-icon like-btn-empty"}
                        icon={RegularIcons.faHeart}/>
                    : <FontAwesomeIcon
                        className={"like-icon like-btn-solid"}
                        icon={SolidIcons.faHeart}/>
                }
                <label className={"liked-label"}>
                    {post.likes}
                </label>
            </button>
            <button className={"download-btn"}>
                <a download={"postImage.jpg"} href={post.postImage}>
                    <FontAwesomeIcon
                        className={"download-icon download-btn-empty"}
                        icon={SolidIcons.faDownload}/>
                </a>
            </button>
            <div className='postCard__header'>
                <span className='postCard__header-name'>
                    {post.user}
                </span>
            </div>
            <img src={post.postImage} className='postCard__post-image' alt='postImage'/>
            <div className='postCard__description' dangerouslySetInnerHTML={{__html: post.postText}}>
            </div>


        </div>
    )
}

export default PostCard;