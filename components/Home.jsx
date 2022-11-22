

import { useRef } from 'react';
// this is very imporant as it extract the data from react 

export default function Home(props) {

    const inputEle = useRef();

    function handleSubmitInput(event) {
        event.preventDefault();

        const getInputEle = inputEle.current.value;

        const messageData = {
            // need to get userid too and pass it up
            message: getInputEle,
        };

        props.onClick(messageData);
    }


    return (
        <div>
            <section>
                <div>Home</div>
            </section>
            <section>
                <div>
                    <form action="" onSubmit={handleSubmitInput}>
                        <div>Profilo img</div>
                        <input type="text" placeholder="What's happening?" id="messageInput" ref={inputEle} />
                        <button type="submit">Tweet</button>
                    </form>
                </div>
            </section>
            <section>
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