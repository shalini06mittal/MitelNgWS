// library to use
import redux from "redux";
// create store
const { createStore } = redux;

const initialState = { count: 0 };

// ACTION CREATORS

const INCREMENT = 'INCR'
const DECREMENT = 'DECR'
const ADDBYVALUE = 'ADDBYVALUE'

const incraction = () => {
    return {type: INCREMENT}
}
const deccraction = () =>{
    return {type: DECREMENT}
}
const addbysomevalue = (payload) => {
    return {type: ADDBYVALUE,payload }
}
// a reducer that works on the store
/// it gets the state and action [type, payload ]
function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADDBYVALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(countReducer)

console.log(store.getState())
store.dispatch(incraction())
store.dispatch(incraction())
store.dispatch(incraction())
console.log(store.getState())
store.dispatch(deccraction())
console.log(store.getState())
store.dispatch(addbysomevalue(20))
console.log(store.getState())
// const person = {name:'some', city:'askjd'}
// const {name, city} = person
// console.log(name)
