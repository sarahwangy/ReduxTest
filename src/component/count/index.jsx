import React, { Component } from 'react'
import { Store } from 'redux';
import store from '../../redux/store';
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/action/action';


// 组件UI 不能有任何redux，所以移除。另外建立 container count， 和redux 交互

export default class CountUI extends Component {
    // state = { count: 0 }


    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    increment = () => {
        // const { count } = this.state;
        const { value } = this.selectNumber
        // this.setState({ count: count + value * 1 })

        // 通知redux 做 action 加 准备
        // store.dispatch({ type: 'increment', data: value * 1 })

        // store.dispatch(createIncrementAction(value * 1))
        this.props.jia(value * 1)

    }


    decrement = () => {
        // const { count } = this.state;
        const { value } = this.selectNumber
        // this.setState({ count: count - value * 1 })
        // store.dispatch({ type: 'decrement', data: value * 1 })
        // store.dispatch(createDecrementAction(value * 1))
        this.props.jian(value * 1)
    }


    incrementIfOdd = () => {
        // const { count } = this.state;
        const { value } = this.selectNumber
        // const { count } = store.getState()

        const { count } = this.props

        console.log("count odd", count)

        if (count % 2 == 0) {

            //  纯react 写法
            // this.setState({ count: count + value * 1 })

            //  纯redux 写法
            // store.dispatch({ type: 'increment', data: value * 1 })
            // store.dispatch(createIncrementAction(value * 1))
            this.props.jia(value * 1)
        }

    }


    incrementAsync = () => {
        // const { count } = this.state;
        const { value } = this.selectNumber
        // setTimeout(() => {
        //     // this.setState({ count: count + value * 1 })

        //     // store.dispatch({ type: 'increment', data: value * 1 })
        //     store.dispatch(createIncrementAction(value * 1))

        // }, 2000);


        // store.dispatch(createIncrementAsyncAction(value * 1, 500))
        this.props.jiaAsync(value * 1, 2000)
    }

    render() {
        // const { count } = this.state;
        // console.log("store:", store)
        // console.log("getstate:", store.getState())

        // 传看 container 是否传递props成功
        console.log("ui props:", this.props)
        return (


            <div>
                {/* 纯react */}
                {/* <h1> 求和为：{this.state.count} </h1> */}

                {/* 纯redux */}
                {/* <h1> 求和为：{store.getState()} </h1> */}
                {/*  react-redux 写法 */}
                <h1>我是count组件，下方的人数总数为:{this.props.totalPerson.length} </h1>
                {/* react-redux 写法 */}
                <h2> 求和为：{this.props.count} </h2>

                <hr />
                <select ref={c => this.selectNumber = c}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select> &nbsp;
                <button onClick={this.increment}> + </button> &nbsp;
                <button onClick={this.decrement}> - </button> &nbsp;
                <button onClick={this.incrementIfOdd}> 偶数加</button> &nbsp;
                < button onClick={this.incrementAsync}> 异步</button> &nbsp;


            </div>
        )
    }
}
