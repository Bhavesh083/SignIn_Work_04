export const initialState = {
    user : {

    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add': 
            return {
                ...state,
                user : {
                    fullname : action.user.fullname,
                    email : action.user.email,
                    password : action.user.password,
                }
            }
            break;
        default: 
            return state;
    }
}
export default reducer;