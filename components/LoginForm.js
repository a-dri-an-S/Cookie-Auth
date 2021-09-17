import { loginUser } from '../lib/auth';
import Router from 'next/router';
import { useState } from 'react';

const LoginForm = () => {

    const [email, setEmail] = useState("Shanna@melissa.tv")
    const [password, setPassword] = useState("anastasia.net")
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const showError = err => {
        console.log(err)
        const error = err.response && err.response.data || err.message;
        setError( error );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        loginUser(email, password)
        .then(() => {
            Router.push("/profile")
        })
        .catch(showError)
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
            <button disabled={loading} type="submit ">
                {loading ? "Sending" : "Submit"}
            </button>
            {error && <div>{error}</div>}
        </form>
    );
}

export default LoginForm;