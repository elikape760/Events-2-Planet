import { useState } from "react"

function SignUp ({setUser}) {
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [origin, setOrigin] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSignup(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                first_name,
                last_name,
                username,
                password,
                password_confirmation: passwordConfirmation,                
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json()
                .then((user) => setUser(user));
            }
        });
    }

    return (
        <div>
            <form className="authForm" onSubmit={handleSignup}>
                <h1>Signup</h1>
                <label htmlFor="first_name">First Name</label>
                <input
                    type="text"
                    id="first_name"
                    autoComplete="off"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)} 
                />
                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    autoComplete="off"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)} 
                />
                <label htmlFor="origin">Origin</label>
                <input
                    type="text"
                    id="origin"
                    autoComplete="off"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)} 
                />
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password" 
                />
                <label htmlFor="password">Password Confirmation</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password" 
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};
export default SignUp