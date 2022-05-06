export const logout = (dispatch, receiveCurrentUser) => {
    var curUser = localStorage.getItem("CurrentUser")
    if(curUser){
    localStorage.removeItem('CurrentUser')
    dispatch(receiveCurrentUser({username: '', password: '', email: ''}))
  }
  else{
    console.log(curUser)
  }
  
}