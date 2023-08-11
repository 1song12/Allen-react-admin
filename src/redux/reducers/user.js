let initstate=""

export default (state=initstate,action)=>{

    let {type,data} =action
    if(type === "tokens"){
        return data
    }
    console.log(action);
    return state
}