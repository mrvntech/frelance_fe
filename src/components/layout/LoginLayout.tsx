import React from "react"
import AppNavigation from "./AppNavigation"
import Main from "./Main"

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <AppNavigation />
            <div>login layout</div>
            <Main>{children}</Main>
        </div>
    )
}