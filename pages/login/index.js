import { initFirebase } from "../firebase/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    initFirebase()
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const signIn = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result.user)
    }
    return (
        <button onClick={signIn}>sign in</button>
    )
}

export default Login