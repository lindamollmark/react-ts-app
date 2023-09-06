import {useState} from "react";

const UseStateSimpleType = () => {
    const [isLogin, setIsLogin] = useState(false);
    const handleLogin = () => { setIsLogin(true)}
    const handleLogout = () => {setIsLogin(false)}
    return (
        <div>
            <button onClick={handleLogin} style={{backgroundColor: 'blue', color: 'white'}}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>You are {isLogin ? 'LoggedIn' : 'LoggedOut'}</p>
        </div>
    )
}

export default UseStateSimpleType;