const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        return {
            ...state,
          currentUser: action.payload,
        };
      }
      case "LOGOUT": {
        return {
            ...state,
          currentUser: {},
        };
      }
      default:
        return state;
    }
  };
  
  export default AuthReducer;