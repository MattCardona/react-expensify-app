import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const setCount = ({count = 0} = {}) => ({
  type: 'SET',
  count: count
});

const restCount = () => ({
  type: 'RESET'
});


const countReducer = (state = {count: 0}, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
          count: state.count += action.incrementBy
        };
    case 'DECREMENT':
      return {
          count: state.count -= action.decrementBy
        };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
          count: 0
        };
    default:
      return state;
    }
};



const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Increment
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 4
// });

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
// store.dispatch({
//   type: 'INCREMENT'
// });


// store.dispatch({
//   type: 'RESET'
// });
store.dispatch(restCount());

//Decrement
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// })

store.dispatch(decrementCount({decrementBy: 7}));
store.dispatch(decrementCount());

// store.dispatch({
//   type: 'SET',
//   count: 123
// })
store.dispatch(setCount({count: 500}));
unsubscribe();
