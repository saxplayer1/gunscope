import PostsPage from "./PostsPage";
import 'gun/sea';
import 'gun/axe';
import './App.css'
import GUN from "gun";

export const gun = GUN({
    peers: [
        'http://localhost:3030/gun'
    ]
})
function App() {
    return (
        <div className={"app"}>
            {sessionStorage.getItem('recall') ? <PostsPage /> : <AuthPage />}
        </div>
    )
}

export default App;