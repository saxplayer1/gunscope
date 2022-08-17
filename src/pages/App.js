import PostsPage from "./PostsPage";
import AuthPage from "./AuthPage";
import 'gun/sea';
import 'gun/axe';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {useEffect, useState} from "react";


function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        console.log(sessionStorage.getItem('recall'))
        if (!sessionStorage.getItem('recall') && document.location.href.split('/').pop() !== 'auth') {
            document.location.replace("auth")
            setLoading(false)
        }
    }, [loading])

    return (
        <div>
            {sessionStorage.getItem('recall') ? <PostsPage /> : <AuthPage />}
        </div>
    )
}

export default App;