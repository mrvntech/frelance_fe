import Link from "next/link";
import LoginPage from "@/pages/login";
// import Profile from "@/components/servercomponents/Profile";

export default function Dashboard() {
    return (
        <div>dashboard
            <div><Link href={"/login"}>login</Link></div>
            <div><Link href={"/login/google"}>google login</Link></div>
            {/* <LoginPage></LoginPage> */}
            {/* <Profile></Profile> */}
        </div>
    )
}