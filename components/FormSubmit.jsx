

import { useRef } from 'react';
// this is very imporant as it extract the data from react 

export default function FormSubmit() {

    const inputEle = useRef();

    function handleSubmitInput(event) {
        event.preventDefault();

        const getInputEle = inputEle.current.value;

        const messageData = {
            // need to get userid too and pass it up
            post: getInputEle,
        };

        // It need to be save to server db
        // props.onClick(messageData);
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
        </div>
    )
}