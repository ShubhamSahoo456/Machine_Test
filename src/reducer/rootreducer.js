let initial = [];

const rootreducer = (state=initial,action)=>{
    switch(action.type){
        case "LOGIN_DETAILS" :
            state=[action.payload]
            return state;

        case "VALIDATE_USER" :
            state=[action.payload]
            return state

        case "SHOW_SECTION" :
            state=[...state,action.payload]
            return state;


        case "ADD_SECTION" :
            state=[...state,action.payload]
            return state;

        case "EDIT_USER" :
            state = [action.payload]
            return state;
            

        default : return state;
    }
}

export default rootreducer;