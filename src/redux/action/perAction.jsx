import { ADD_PERSON } from "../constant";

const createAddPersonAction = personObj => ({ type: ADD_PERSON, data: personObj })

export default createAddPersonAction
