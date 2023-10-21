import { axiosInstance } from "@/app/utils/axios/instance"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

export default function useMyJobApi() {
    const { data, status } = useSession()
    const router = useRouter();
    if (status === "unauthenticated") router.push("/api/auth/signin")
    const getMyJob = async () => {
        if (status === "authenticated") {
            return await axiosInstance.get("http://localhost:9000/my-jobs", {
                headers: {
                    Authorization: `Bearer ${data?.accessToken}`
                }
            })
        }
    }
    return {
        getMyJob
    }
}