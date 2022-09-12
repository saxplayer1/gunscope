import PostsPage from "./PostsPage";
import AuthPage, {gun} from "./AuthPage";
import 'gun/sea';
import 'gun/axe';
import './App.css'


function App() {
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     console.log(sessionStorage.getItem('recall'))
    //     if (!sessionStorage.getItem('recall') && document.location.href.split('/').pop() !== 'auth') {
    //         document.location.replace("auth")
    //         setLoading(false)
    //     }
    // }, [loading])
    return (
        <div className={"app"}>
            {sessionStorage.getItem('recall') ? <PostsPage /> : <AuthPage />}
        </div>
    )
}

export default App;