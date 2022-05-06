

const defaultUser =  {
    
        username: 'default_user_name',
        password: 'default_password',
        email: ''
    
}
const loginReducer = (state = defaultUser, action) => {
    switch (action.type) {
      case "GET_CURRENT_USER":
        state = JSON.stringify(action.currentUser)
        return state
      default:
        return state;
    }
  };
  export default loginReducer;