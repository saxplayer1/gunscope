import PostsPage from "./PostsPage";
import 'gun/sea';
import 'gun/axe';
import './App.css'
import AuthPage from "./AuthPage";

function App() {
    return (
        <div className={"app"}>
            {sessionStorage.getItem('recall') ? <PostsPage /> : <AuthPage />}
        </div>
    )
}

export default App;