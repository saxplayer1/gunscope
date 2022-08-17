import {useSelector} from "react-redux";
import {selectuser} from "../features/userSlice";
import PostsPage from "./PostsPage";
import AuthPage from "./AuthPage";

const App = () => {
    const user = useSelector(selectuser)

    return (
        <div>
            {user ? <PostsPage /> : <AuthPage/>}
        </div>
    )
}

export default App;