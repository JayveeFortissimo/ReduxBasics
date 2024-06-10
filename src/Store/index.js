import { legacy_createStore as createStore} from 'redux';

const counterReduce = (state = {count:0},action) => {
    

  switch(action.type){

    case 'Increment':
  return {...state,count:state.count + 1}
    break;

  case 'Decrement':
return {...state,count:state.count-1}
break;

case 'Reset':
return {state,count:state.count = 0}
break;

    default:
        console.log("sdsd");
        break;
  }

  return state
}

//Need neto para magamit yung reduce function
// sa mga components
//create Store i2
const store = createStore(counterReduce);


export default store;