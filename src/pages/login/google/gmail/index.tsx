import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Gmail() {
    return <div>gmail
        <Link href={"/login/google/email"}>email</Link>
        <button onClick={() => signIn("google", { callbackUrl: "http://localhost:3000" })}></button>
    </div>
}