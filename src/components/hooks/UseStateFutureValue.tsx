import {useState} from "react";

type UserType = {
    fname: string,
    lname: string
}
const UseStateSimpleType = () => {
    const [user, setUser] = useState<UserType | null>(null);
    const handleLogin = () => { setUser({
        fname: 'Tina',
        lname: 'Turner'
    })}
    const handleLogout = () => {setUser(null)}
    return (
        <div>
            <button onClick={handleLogin} style={{backgroundColor: 'blue', color: 'white'}}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>You are {user?.fname} {user?.lname}</p>
        </div>
    )
}

export default UseStateSimpleType;