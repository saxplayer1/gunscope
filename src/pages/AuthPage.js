import React, {useState} from 'react';
import './AuthPage.css'
import GUN from "gun";
import 'gun/sea'

export const gun = GUN({
    peers: [
        'http://localhost:3030/gun'
    ]
})
export const user = gun.user().recall({sessionStorage: true});

function AuthPage() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    function createUserCallback(ack) {
        if (ack.err) {
            console.log(ack.err)

        } else {
            console.log('USER CREATED')
            user.auth(name, password, loginUserCallback)
        }
        document.location.replace("")
    }

    function loginUserCallback(ack) {
        if (ack.err) {
            console.log(ack.err)
        } else {
            console.log("user logged in")
        }

        document.location.replace("")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        gun.get('~@' + name).once((data, key)=>{
            if (data) {
                user.auth(name, password, loginUserCallback)
            } else {
                user.create(name, password, createUserCallback);
            }
        });
    }

    return(
        <div className={"login"}>
            <form className={"login__form"} onSubmit={(e) => handleSubmit(e)}>
                <h1>Login here, Stranger!</h1>
                <input type={"name"} placeholder={"Name"} value={name} onChange={(e) => setName(e.target.value)}/>
                <input type={"password"} placeholder={"Password"} minLength={8} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type={"submit"} className={"submit__btn"}>Let Me In!</button>
            </form>
        </div>
    )
}

export default AuthPage;