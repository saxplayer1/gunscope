import React, {useState, useRef} from "react";
import "./post-creation.css"
import { Editor } from '@tinymce/tinymce-react';
import {gun} from "../../pages/AuthPage";

function PostCreation() {
    const [contentEditor, setContentEditor] = useState();
    const [postImage, setPostImage] = useState();

    const editorRef = useRef();

    const handleEditorChange = (content, editor) => {
        setContentEditor(content);
    }

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPostImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const submit = () => {
        gun.get("posts").then(posts => {
            console.log(posts)
            gun.user().get("alias").then(name => {
                let post = {};
                post.id = new Date().getTime().valueOf() + Math.random();
                post.postImage = postImage;
                post.postText = contentEditor;
                post.likes = 0;
                post.user = name;
                post.creationTime = new Date().getTime().toString();
                gun.get('posts').get(post.id).put(post).then(() =>
                    console.log("post created")
                )
            })
        })
    }

    return (
        <div className={"post-creation"}>
            <div>
                {postImage
                    ? <img src={postImage} className={"postImage"} alt={""}/>
                    : <div/>}

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
            <div className={"post-text-editor-container"}>
                <Editor
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>Write to your heart's content!</p>"
                    init={{
                        statusbar:false,
                        height: 200,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={handleEditorChange}
                />
            </div>
            <button type={"submit"}
                    disabled={!postImage && !contentEditor}
                    onClick={submit}
                    className={"submit__btn-post " + (postImage && contentEditor ? 'submit-enabled' : 'submit-disabled')}>
                Send Post!
            </button>
        </div>
    )
}

export default PostCreation;