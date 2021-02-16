import {combineReducers} from "redux"

const initialStateBuah ={
    form:{
        warna:'',
        jenis:'',
        harga:''
    },
}

const initialStateOrang ={
    form:{
        title:'',
        body:''
    },
}

const reducerBuah = (state = initialStateBuah,action) => {
    if(action.type === "SET_FORM"){
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]:action.inputValue,
            }
        }
    }
    return state
}

const reducerOrang = (state = initialStateOrang,action) =>{
    if(action.type === "SET_ORANG"){
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]:action.inputValue,
            }
        }
    }
    return state
}

const reducer = combineReducers({
    reducerBuah,
    reducerOrang
})

export default reducer