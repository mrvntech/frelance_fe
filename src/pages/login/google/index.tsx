// import Profile from "@/components/servercomponents/Profile";
import LoginLayout from "@/components/layout/LoginLayout";
import Link from "next/link";
import React from "react";
import { useState } from "react";


export default function Google() {
    const [count, setCount] = useState(0);
    return (
        <div>google login function
            <div><Link href={"/home"}>home</Link></div>
            <div><Link href={"/login/facebook"}>facebook</Link></div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    )
}