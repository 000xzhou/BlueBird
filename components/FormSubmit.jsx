

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
        <div className='border-b-2'>
            <section className='text-xl font-semibold border-b-2'>
                <div className='p-4'>Home</div>
            </section>
            <section className='p-4'>
                <div className='pb-10'>
                    <form action="" onSubmit={handleSubmitInput}>
                        {/* fetch img from db. replace later */}
                        <img className='w-14 rounded-full absolute' src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpghttps://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" />
                        <input className='w-full py-4 bg-transparent outline-none indent-16' type="text" placeholder="What's happening?" id="messageInput" ref={inputEle} />
                        <button className='w-[5em] rounded-[2em] text-[1em] bg-blue hover:bg-blueContrast py-2 px-4 font-medium float-right ' type="submit">Tweet</button>
                    </form>
                </div>
            </section>
        </div>
    )
}