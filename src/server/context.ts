import { db,auth } from "@/lib"

export const createTRPCContext = async (opts:{ headers:Headers })=>{
    const session = await auth()
    return {
        session,db,...opts
    }
}