import { AuthenticateResponseBody, authenticate } from "@/api/auth";
import { axiosInstance, setHeader } from "@/app/utils/axios/instance";
import { AxiosResponse } from "axios";
import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { sourceMapsEnabled } from "process";


export default NextAuth({
    session: {
        maxAge: 60
    },
    providers: [
        GoogleProvider({
            clientId: "635061596522-l2gbf7ujvgohbgj82lt7sstf9fc16sqh.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ],
    callbacks: {
        async signIn(params) {
            // const response: AxiosResponse<AuthenticateResponseBody> = await authenticate({ tokenId: params.account?.id_token, username: params.user.email as string });
            // console.log(params);

            return true;
        },
        async session(params) {
            console.log("session");
            params.session.accessToken = params.token.accessToken as string
            return params.session;
        },
        async jwt(params) {
            console.log('jwt');
            try {
                const response: AxiosResponse<AuthenticateResponseBody> = await authenticate({ tokenId: params.account?.id_token, username: params.token.email as string });
                params.token.accessToken = response.data.accessToken;
            } catch (error) {
                console.log(error);
            }
            return params.token;
        }
    },
})