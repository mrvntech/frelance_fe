import Link from "next/link";

export default function LoginPage() {
    return (
        <div>
            this is login page
            <div><Link href={{
                pathname: '/login/google'
            }}>google login</Link></div>
            <div><Link href={"/login/facebook"}>facebook login</Link></div>
            <div><Link href={"/home"}>home</Link></div>
            <div><Link href={"/dashboard"}>dashboard</Link></div>
        </div>
    )
}