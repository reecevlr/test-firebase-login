import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth()

    async function handleSignUp(e) {
        // Prior testing w/o preventDefault auto refreshes page
        // and no registration takes place
        e.preventDefault()

        try {
            const newUser = await createUserWithEmailAndPassword(auth, email, password)
            console.log(newUser)
        } 
        catch (error) {
            console.log(error)
        }
        
        // alert(email + " : " + password)
        
        // createUserWithEmailAndPassword(auth, email, password)
        // .then((user) => {
        //     console.log(user)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    }

    return (
        <>
            <h1>Signup Page</h1>
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
                    onClick={(e) => {handleSignUp(e)}}>
                    Sign up
                </button>

                {/* <input 
                    onChange={(e) => {setEmail(e.target.value)}}
                    type="text" 
                    placeholder="Email" />
                <input 
                    onChange={(e) => {setPassword(e.target.value)}}
                    type="text" 
                    placeholder="Password" /> */}
            </form>
        </>
    )
}