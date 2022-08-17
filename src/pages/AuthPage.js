import React, {useState} from 'react';
import './AuthPage.css'
import {useDispatch} from "react-redux";
import {login} from "../features/userSlice";

function AuthPage() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
            "name": name,
            "password": password,
            "loggedIn": true
        }))
    }

    return(
        <div className={"login"}>
            <form className={"login__form"} onSubmit={(e) => handleSubmit(e)}>
                <h1>Login here, Stranger!</h1>
                <input type={"name"} placeholder={"Name"} value={name} onChange={(e) => setName(e.target.value)}/>
                <input type={"password"} placeholder={"Password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type={"submit"} className={"submit__btn"}>Let Me In!</button>
            </form>
        </div>
    )
}

export default AuthPage;