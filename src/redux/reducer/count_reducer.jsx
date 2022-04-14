
import { INCREMENT, DECREMENT } from "../constant"

//  reducer 本质是function , 有参数
const initState = 0

export default function countReducer(preState = initState, action) {
    // if(preState ===undefined)
    const { type, data } = action

    switch (type) {
        case INCREMENT:
            console.log("@")
            console.log("prestate:", preState)
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return 0
    }
}