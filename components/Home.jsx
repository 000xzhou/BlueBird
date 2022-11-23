

export default function Home(props) {

    // loop though the array and out in it's own div
    const box = props.tempInfo.map(data => {
        return (
            <div key={data.id}>
                <br></br>
                <hr />

                <div>{data.username}</div>
                <div>{data.message}</div>
            </div>
        )
    })
    return (
        <div>
            <section>
                {box}
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