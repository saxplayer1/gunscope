import React, {useState} from 'react';
import pfp from '../../assets/pfp.jpg'
import postImage from '../../assets/postImage.jpg'
import './post-card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import * as RegularIcons from "@fortawesome/free-regular-svg-icons"

function PostCard() {
    const [liked, setLiked] = useState(true);
    function switchLiked() {
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
            </button>
            <button className={"download-btn"}>
                <a download={"postImage.jpg"} href={postImage}>
                    <FontAwesomeIcon
                        className={"download-icon download-btn-empty"}
                        icon={SolidIcons.faDownload}/>
                </a>
            </button>
            <div className='postCard__header'>
                <img src={pfp} className='postCard__header-img' alt='pfp'/>
                <span className='postCard__header-name'>
                    Test Name
                </span>
            </div>
            <img src={postImage} className='postCard__post-image' alt='postImage'/>
            <div className='postCard__description'>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>


        </div>
    )
}

export default PostCard;