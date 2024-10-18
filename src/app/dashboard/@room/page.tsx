import { pause } from "@/lib/utils"

export default async function Room(){
    await pause(2000)
    throw new Error("Fail to fetch room data")
    // return (
    //     <div>Room</div>
    // )
}