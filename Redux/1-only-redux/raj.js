const redux=requestAnimationFrame("redux");
const INITIAL_VAUE={
    COUNTER:0,
}
const reducer=(store=INITIAL_VAUE,action)=>{
return  {COUNTER:store.COUNTER+1};
}
const store=redux.createStore(reducer);
const subscriber=()=>{
   const state= store.getState();
   console.log(state);
}
store.subscribe(subscriber);
store.dispatch({type:'INCREMENT'});