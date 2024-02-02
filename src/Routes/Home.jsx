import { signOut, getAuth } from "firebase/auth";

export function Home() {
    const auth = getAuth();

    async function handleSignOut() {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Homepage</h1>
            <button 
                onClick={() => {handleSignOut()}}>
                Sign out
            </button>
        </>
    )
}