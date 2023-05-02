export const setLocalStorage = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
};


export const getLocalStorage = () => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    return {
        user, token
    };
};

export const removeLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
};