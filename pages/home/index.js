
import Home from '../../components/Home.jsx'

// This page should just redirt them to the page/home.js
// but it won't let me because i have the [user.js]...hmmmm

export default function HomePage() {

    function AddInputSubmit(inputData) {
        console.log(inputData)
    }

    return (
        <div>
            <Home onClick={AddInputSubmit} />
        </div>
    )
}
