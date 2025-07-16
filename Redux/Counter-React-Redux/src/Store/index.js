import {createStore} from "redux";

const INITIAL_VALUE={
   counter:0,
   privacy:false,
}
const counterReducer=(store=INITIAL_VALUE,action)=>{
    if(action.type==="increment"){
       return {counter:store.counter+1,privacy:store.privacy};
    }
    else if(action.type==="Decrement"){
        return {counter:store.counter-1,privacy:store.privacy};
    }
    else if(action.type==="Add"){
        return {counter:store.counter+Number(action.payload.num),privacy:store.privacy}
    }
    else if(action.type==="Subtract"){
        return {counter:store.counter-Number(action.payload.num),privacy:store.privacy} 
    }
    else if(action.type==="PRIVACY-TOGGLE"){
      return {privacy:!store.privacy,counter:store.counter};
    }
    return store;
}

 const counterStore=createStore(counterReducer);
 export default counterStore;