import {combineReducers} from "redux"

const initialStateBuah ={
    form:{
        warna:'',
        jenis:'',
        harga:''
    },
}

const initialStateVerifBuah ={
    form:{
        warna:'merah',
        jenis:'bulet'
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

const reducerVerifBuah = (state = initialStateVerifBuah,action) => {
    if(action.type === "VALIDASI_BUAH"){
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
    reducerVerifBuah,
    reducerOrang
})

export default reducer