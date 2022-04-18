import './App.css';
import {useContext, useEffect} from "react";
import {AuthContext} from "./index";
import {observer} from "mobx-react-lite";
import SpinnerLoading from "./components/SpinnerLoading";
import LoginForm from "./pages/Login/LoginPage";
import NavBar from "./components/NavBar";
import {useRoutes} from "./routes";

function App() {
    const {authStore} = useContext(AuthContext);
    const routes = useRoutes(authStore.isAuth);

    useEffect(() => {
        if(localStorage.getItem("token")) {
            void authStore.checkAuth();
        }
    }, [])

    if(authStore.isLoading) {
        return <SpinnerLoading />;
    }

    if (!authStore.isAuth) {
        return <LoginForm />;
    }

    return (
        <div className="App">
            <NavBar/>
            {routes}
        </div>
    );
}

export default observer(App);
