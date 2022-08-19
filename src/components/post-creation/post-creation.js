import React, {useState} from "react";
import "./post-creation.css"

function PostCreation() {
    const [postImage, setPostImage] = useState();
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPostImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    return (
        <div className={"post-creation"}>
            <div>
                <img src={postImage} className={"postImage"} alt={""}/>
            </div>
            <div className={"image-upload__wrapper"}>
                <label htmlFor={"image-upload"}>
                    UPLOAD HERE
                    <input type={"file"}
                           className={"image-upload__input"}
                           name={"image-upload"}
                           id={"image-upload"}
                           accept={"image/*"}
                           onChange={imageHandler}/>
                </label>
            </div>
        </div>
    )
}

export default PostCreation;