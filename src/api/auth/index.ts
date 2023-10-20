import { axiosInstance } from "@/app/utils/axios/instance"
interface AuthenticateRequestBody {
    tokenId?: string,
    username?: string
}

export interface AuthenticateResponseBody {

}
export async function authenticate(requestBody: AuthenticateRequestBody) {
    return await axiosInstance.post("/auth", requestBody);
}

