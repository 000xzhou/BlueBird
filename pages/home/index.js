
import Home from '../../components/Home.jsx'
import FormSubmit from '../../components/FormSubmit.jsx'


export default function HomePage() {

    function AddInputSubmit(inputData) {
        console.log(inputData)
    }

    // Temp info for outputting data from db
    const tempInfo = [
        {
            id: 1,
            username: "A cool bird",
            message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
        },
        {
            id: 2,
            username: "Another cool bird",
            message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
        }
    ]
    return (
        <div>
            <FormSubmit onClick={AddInputSubmit} />
            <Home tempInfo={tempInfo} />
        </div>
    )
}
