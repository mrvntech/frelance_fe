import { axiosInstance } from "@/app/utils/axios/instance"
import { useSession } from "next-auth/react"

export const getMyJob = async () => {
    return await axiosInstance.get("http://localhost:9000/my-jobs")
}

export default function useMyJobApi() {
    const { data } = useSession()
    const getMyJob = async () => {
        console.log(data?.accessToken);

        return await axiosInstance.get("http://localhost:9000/my-jobs", {
            headers: {
                Authorization: `Bearer ${data?.accessToken}`
            }
        })
    }
    return {
        getMyJob
    }
}