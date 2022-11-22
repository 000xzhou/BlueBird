

export default function Home(props) {

    return (
        <div>

            <section>

                {/* // Note to self... map out the array. Or object. depends on what the database outputs */}
                <div>
                    <div>{props.tempInfo[0].username}</div>
                    <div>{props.tempInfo[0].message}</div>
                </div>
                <div>
                    <div>{props.tempInfo[1].username}</div>
                    <div>{props.tempInfo[1].message}</div>
                </div>
            </section>
        </div>
    )
}



// const inputEle = useRef();

// function handleSubmitInput(event) {
//     event.preventDefault();

//     const getInputEle = inputEle.current.value;

//     const messageData = {
//         // need to get userid too and pass it up
//         message: getInputEle,
//     };

//     // It need to be save to server db
//     props.onClick(messageData);
// }

{/* <section>
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
</section> */}