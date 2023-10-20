import LoginLayout from "@/components/layout/LoginLayout";
import Link from "next/link";

export default function Facebook() {
    return (
        <div>facebook login function
            <div><Link href={"/login/google"}>google</Link></div>
        </div>
    )
}