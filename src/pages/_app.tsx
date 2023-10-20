import LoginLayout from '@/components/layout/LoginLayout'
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const [count, setCount] = useState(0);
    return (
        <SessionProvider session={session}>
            <LoginLayout>
                <div>
                    <Component {...pageProps} />
                    <button onClick={() => setCount(count + 1)}>increment</button>
                    <button onClick={() => setCount(count - 1)}>decrement</button>
                </div>
            </LoginLayout>
        </SessionProvider>
    )
}