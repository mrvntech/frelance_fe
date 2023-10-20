import useMyJobApi from "@/api/my-job";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function MyJob() {
    const { getMyJob } = useMyJobApi()
    useEffect(() => {
        (async () => {
            try {
                const response = await getMyJob();
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        })()
    })
    return (
        <div>my job
            <div><button onClick={() => signOut()}>sign out</button></div>
        </div>
    )
}