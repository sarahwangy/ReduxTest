import React, { Component } from 'react'
import CountUI from '../../component/count'
import store from '../../redux/store.jsx'
// 这里不用import store了，在最外层APP里面引用 store了。
import { connect } from 'react-redux'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/action/action';

// 原本写法，store 。getstate。
// function a() {
//     return { count: store.getState() }
// }

// 调用a 方法的时候，自动把state传进去了，所以不用store 。getstate。
// function mapStateToProps(state) {
//     return { count: state }
// }


// 优化代码1
// const mapStateToProps = state => ({ count: state })


// 简写，调用dispatch的时候，自动把dispatch传进去，所以不用store。dispatch写法了
// function mapDispatchToProps(dispatch) {
//     return {
//         jia: (number) => {
//             dispatch(createIncrementAction(number))
//         },
//         jian: (number) => {
//             dispatch(createDecrementAction(number))

//         },
//         jiaAsync: (number, time) => {
//             dispatch((createIncrementAction(number, time)))

//             // 如果有俩个dispatch，说明调用了2次dispatch方法，那么异步，会同时操作俩次，结果是原来的2倍
//             // dispatch(dispatch(createIncrementAction(number, time)))
//         }
//     }
// }

// 代码优化：mapDispatchToProps
// const mapDispatchToProps = dispatch => ({

//     jia: (number) => 
//         dispatch(createIncrementAction(number)),
//     jian: (number) => 
//         dispatch(createDecrementAction(number)),
//     jiaAsync: (number, time) => 
//         dispatch((createIncrementAction(number, time)))

//         // 如果有俩个dispatch，说明调用了2次dispatch方法，那么异步，会同时操作俩次，结果是原来的2倍
//         // dispatch(dispatch(createIncrementAction(number, time)))
// })



// 原本写法
// function b() {
//     return { jia: (number) => {
//        store.dispatch({type:'increment', data:number})} }
// }




// const CountContainer = connect()(CountUI)
// export default CountContainer;

// export default connect(mapStateToProps, mapDispatchToProps)(CountUI);

// 优化写法：
export default connect(
    state => ({ count: state.sum, totalPerson: state.persons }),
    dispatch => (
        {
            jia: (number) => dispatch(createIncrementAction(number)),
            jian: (number) => dispatch(createDecrementAction(number)),
            jiaAsync: (number, time) => dispatch((createIncrementAction(number, time)))
        }
    )
)(CountUI)


// 最简单的写法，但是不生效。。。啊
// export default connect(
//     state => ({ count: state }),
//     dispatch => (
//         {
//             jia: createIncrementAction,
//             jian: createDecrementAction,
//             jiaAsync: createIncrementAction
//         }
//     )
// )(CountUI)

