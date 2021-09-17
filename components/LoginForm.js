import { loginUser } from '../lib/auth';
import Router from 'next/router';
import { useState } from 'react';

const LoginForm = () => {

    const [email, setEmail] = useState("Shanna@melissa.tv")
    const [password, setPassword] = useState("anastasia.net")

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(email, password)
        .then(() => {
            Router.push("/profile")
        })
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit ">Submit</button>
        </form>
    );
}

export default LoginForm;