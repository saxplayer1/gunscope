import PostsPage from "./PostsPage";
import AuthPage, {gun} from "./AuthPage";
import 'gun/sea';
import 'gun/axe';
import './App.css'


function App() {
    return (
        <div className={"app"}>
            {sessionStorage.getItem('recall') ? <PostsPage /> : <AuthPage />}
        </div>
    )
}

export default App;