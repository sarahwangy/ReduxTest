import countReducer from "./count_reducer";
import personReducer from "./perReducer";
import { combineReducers } from "redux";


// 单独建立一个file， 储存暴露 所有的reduce， 这样store直接引入这个index文件，其他的就不用一一引入了
export default combineReducers({
    sum: countReducer,
    persons: personReducer
})

//  const allReducer = combineReducers({
//     sum: countReducer,
//     persons: personReducer
// })

// export default allReducer