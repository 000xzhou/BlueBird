export default function Profile(props) {

    // loop though the array and out in it's own div
    const box = props.messageData.message.map(data => {
        return (
            <div key={data.messageid}>
                <br></br>
                <hr />
                {/* <div>{data.username}</div> */}
                {props.messageData.username}
                <div>{data.mess}</div>
            </div>
        )
    })
    // console.log(props.messageData.message)
    return (
        <div>

            {box}
        </div>

    )
}