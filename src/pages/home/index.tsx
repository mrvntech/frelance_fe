import axios from "axios"
import Link from "next/link";

export default function Home() {
    return (
        <div>
            this id home page
            <button onClick={async () => {
                const result = await axios.get("http://localhost:8080/users/1", {
                    auth: {
                        username: 'phucnq',
                        password: 'phucnq'
                    }
                })
                console.log(result);

            }}>click here</button>
            <div><Link href={"/login"}>login</Link></div>
        </div>
    )
}