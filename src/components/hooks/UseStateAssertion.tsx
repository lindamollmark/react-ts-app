import {useState} from "react";

type UserType = {
    fname: string,
    lname: string
}
const UseStateAssertion = () => {
    const [user, setUser] = useState<UserType>({} as UserType);
    const handleLogin = () => { setUser({
        fname: 'Tina',
        lname: 'Turner'
    })}
    const handleLogout = () => {setUser({
        fname: '',
        lname: ''
    })}
    return (
        <div>
            <button onClick={handleLogin} style={{backgroundColor: 'blue', color: 'white'}}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>You are {user.fname} {user.lname}</p>
        </div>
    )
}

export default UseStateAssertion;