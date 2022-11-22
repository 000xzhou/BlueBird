import { useState } from 'react';
import Link from 'next/link'


import { useRef } from 'react';
// this is very imporant as it extract the data from react 

export default function Home(props) {
    // console.log(props.tweet)
    const [message, setMessage] = useState([])
    const messages = []

    function handleInput(e) {
        {/* store input data to db  */ }
        // e.preventdefault()
        messages.push(e.target.value)
    }
    console.log(`vaule is: ${messages}`)

    return (
        <div>
            <section>
                <div>Home</div>
            </section>
            <section>
                <div>
                    <form action="">
                        <div>Profilo img</div>
                        <input type="text" placeholder="What's happening?" />
                        <button onSubmit={handleInput} type="submit">Tweet</button>
                    </form>
                </div>
            </section>
            <section>
                <div>{messages}</div>
                <div>
                    <div>user</div>
                    <div>message</div>
                </div>
                <div>
                    <div>other user</div>
                    <div>message</div>
                </div>
            </section>
        </div>
    )
}