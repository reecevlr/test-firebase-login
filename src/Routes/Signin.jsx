import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    async function handleSignIn(e) {
        e.preventDefault();
        try {
            const newUser = await signInWithEmailAndPassword(auth, email, password);
            console.log(newUser);
            navigate('/home');
        } 
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Sign in Page</h1>
            <form action="">
                <input 
                    onChange={(e) => {setEmail(e.target.value)}}
                    type="email" 
                    placeholder="Email" />
                <input 
                    onChange={(e) => {setPassword(e.target.value)}}
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password" />
                <button
                    onClick={(e) => {handleSignIn(e)}}>
                    Sign in
                </button>
            </form>
        </>
    )
}