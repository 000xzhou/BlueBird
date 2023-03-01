import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
    const { userId } = req.query
    res.end(`Post: ${userId}`)

    if (req.method === 'GET') {
        const querySnapshot = await getDocs(collection(blueBirddb, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });

    } else if (req.method === 'POST') {
        try {
            const docRef = await addDoc(collection(blueBirddb, "users"), {
                first: "Ada",
                last: "Lovelace",
                username: "username",
                password: "password",
                join: "1-1-2023"
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    } else if (req.method === "PUT") {

    } else if (req.method === "DELETE") {

    }
}