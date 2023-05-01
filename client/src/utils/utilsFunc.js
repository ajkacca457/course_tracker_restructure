export const setLocalStorage= (user,token)=>{
    localStorage.setItem("user",JSON.stringify(user));
    localStorage.setItem("token",JSON.stringify(token));
}