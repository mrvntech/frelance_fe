// import Profile from "@/components/servercomponents/Profile";
import Link from "next/link";


export default function GoogleLogin() {
    return (
        <div>google login function
            <div><Link href={"/home"}>home</Link></div>
            {/* <Profile></Profile> */}
        </div>
    )
}