import { INCREMENT, DECREMENT } from "../constant"
import store from "../store"


//  action 专门为count 组件生成 action 对象

// function createIncrementAction(data) {
//     return { type: 'decrement', data }
// }

//  只有一行 return，可以省略写成下面的

export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDecrementAction = data => ({ type: DECREMENT, data })

export const createIncrementAsyncAction = (data, time) => {
    return () => {
        setTimeout(() => {
            store.dispatch(createIncrementAction(data))

        }, time);
    }
}

//  另种写法
// export const createIncrementAsyncAction = (data, time) => {
//     return (dispatch) => {
//         setTimeout(() => {
//             dispatch(createIncrementAction(data))

//         }, time);
//     }
// }
