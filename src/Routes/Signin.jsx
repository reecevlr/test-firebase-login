import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    async function handleSignIn(e) {
        e.preventDefault();
        try {
            const newUser = await signInWithEmailAndPassword(auth, email, password);
            console.log(newUser);
            navigate('/home');
        } 
        catch (error) {
            console.error(error)
        }
    };

    async function handleSignInWithGoogle(e) {
        e.preventDefault();
        try {
            const newUser = await signInWithPopup(auth, googleProvider);
            console.log(newUser);
            navigate('/home');
        } 
        catch (error) {
            console.error(error)
        }
    };

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
                <div>
                    <button
                        onClick={(e) => {handleSignIn(e)}}>
                        Sign in
                    </button>
                    <button
                        onClick={(e) => {handleSignInWithGoogle(e)}}>
                        Google Sign in
                    </button>
                </div>
            </form>
        </>
    )
};