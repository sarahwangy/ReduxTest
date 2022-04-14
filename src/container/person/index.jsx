// import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import createAddPersonAction from '../../redux/action/perAction'


//  组件UI 和 container 写在一个文件里
// person -> zi 
// class Person extends Component {

//     addPerson = () => {
//         const name = this.nameNode.value
//         const age = this.ageNode.value
//         // console.log("name is:", name, "age is:", age)
//         const personObj = { id: nanoid(), name, age }
//         this.props.addOnePerson(personObj)
//     }

//     render() {
//         return (
//             <div>
//                 <h1>我是person 组件，上方的求和为：{this.props.count} </h1>
//                 <h2>my name is:</h2>
//                 <input ref={c => this.nameNode = c} type='text' placeholder="input name" />
//                 <input ref={c => this.ageNode = c} type='text' placeholder="input age" />
//                 <button onClick={this.addPerson}> ADD PERSON</button>
//                 <ul>
//                     {/*  receive props from fu  */}
//                     {

//                         this.props.Manyperson.map((p) => {
//                             return <li key={p.id}> {p.name} -- {p.age} </li>

//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// // fu 

// export default connect(
//     // fu state, pass to zi person, 父类container 接收 state 从redux store 里面，变成state，然后传给子 person
//     //    redux 共享平台，储存了很多reduce处理后的state，每个组件都可以按需调用其他组件储存在redux 里面的state。
//     // 这里person组件调用了 count组件储存在 redux的state， state.sum，传给子组件person，person调用props。这样实现redux 里面的数据共享
//     state => ({ Manyperson: state.persons, count: state.sum }),
//     { addOnePerson: createAddPersonAction }
// )(Person)

import React, { useRef } from 'react';


function Person(props) {
    console.log("person", props)
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    // console.log(inputRef.current?.value)

    const addPerson = () => {
        const name = inputRef.current.value
        const age = inputRef2.current.value
        console.log("name is:", name, "age is:", age)
        const personObj = { id: nanoid(), name, age }
        props.addOnePerson(personObj)
    }


    return (
        <div>
            <h1>我是person 组件，上方的求和为：{props.count} </h1>
            <h2>my name is:</h2>
            <input ref={inputRef} type='text' placeholder="input name" />
            <input ref={inputRef2} type='text' placeholder="input age" />
            <button onClick={addPerson}> ADD PERSON</button>
            <ul>
                {/*  receive props from fu  */}
                {

                    props.Manyperson.map((p) => {
                        return <li key={p.id}> {p.name} -- {p.age} </li>

                    })
                }
            </ul>
        </div>
    )

}


export default connect(
    // fu state, pass to zi person, 父类container 接收 state 从redux store 里面，变成state，然后传给子 person
    //    redux 共享平台，储存了很多reduce处理后的state，每个组件都可以按需调用其他组件储存在redux 里面的state。
    // 这里person组件调用了 count组件储存在 redux的state， state.sum，传给子组件person，person调用props。这样实现redux 里面的数据共享
    state => ({ Manyperson: state.persons, count: state.sum }),
    { addOnePerson: createAddPersonAction }
)(Person)
