
export const REGISTER_STARTED = "user/REGISTER_STARTED";
export const REGISTER_SUCCESS = "user/REGISTER_SUCCESS";
export const REGISTER_FAILED = "user/REGISTER_FAILED";

const initialState =
{
    loading: true,
        success: false,
        failed: false,
        errors : {}
}


export const registerReducer = (state = initialState, action) => {
    let newState = state;
    switch(action.type)
    {
        case REGISTER_STARTED: {
            console.log('----Begin of User Registration---- ')
            break;
        }
        case REGISTER_SUCCESS:{
            console.log('----Succses of User Registration----')
            break;
        }
        case REGISTER_FAILED: {
            console.log('----Fail of User Registration----')
            break;
        }
        default :{
            return state;
        }        
    }
    return newState;
}

export const regUser = (model) => 
{
    return (dispatch) => {
      dispatch({type: REGISTER_STARTED});  
    };
}