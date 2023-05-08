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
    localStorage.removeItem("courses");
    localStorage.removeItem("course");
};


export const authHeader = (thunkAPI) => {
    return {
        headers: {
            Authorization: `Bearer ${thunkAPI.getState().user.token}`
        }
    };
};


export const courses = [
    {
        "_id": "6454d9ff2f9876e2c07be2a3",
        "name": "adobe photoshop",
        "number_of_lessons": 45,
        "lesson_completed": 0,
        "hours_needed": 45,
        "hours_spended": 0,
        "createdBy": "644f82c45b397e768876926e",
        "createdAt": "2023-05-05T10:27:11.941Z",
        "__v": 0
    },
    {
        "_id": "6454da112f9876e2c07be2a5",
        "name": "adobe illustrator",
        "number_of_lessons": 50,
        "lesson_completed": 0,
        "hours_needed": 50,
        "hours_spended": 0,
        "createdBy": "644f82c45b397e768876926e",
        "createdAt": "2023-05-05T10:27:29.670Z",
        "__v": 0
    },
    {
        "_id": "6454da2e2f9876e2c07be2a7",
        "name": "adobe after effect",
        "number_of_lessons": 55,
        "lesson_completed": 0,
        "hours_needed": 55,
        "hours_spended": 0,
        "createdBy": "644f82c45b397e768876926e",
        "createdAt": "2023-05-05T10:27:58.548Z",
        "__v": 0
    },
    {
        "_id": "6454da4b2f9876e2c07be2a9",
        "name": "HTML basics",
        "number_of_lessons": 15,
        "lesson_completed": 1,
        "hours_needed": 10,
        "hours_spended": 1,
        "createdBy": "644f82c45b397e768876926e",
        "createdAt": "2023-05-05T10:28:27.847Z",
        "__v": 0
    },
    {
        "_id": "6454da652f9876e2c07be2ab",
        "name": "Css basics",
        "number_of_lessons": 40,
        "lesson_completed": 0,
        "hours_needed": 20,
        "hours_spended": 0,
        "createdBy": "644f82c45b397e768876926e",
        "createdAt": "2023-05-05T10:28:53.215Z",
        "__v": 0
    },
    {
        "_id": "6454db022f9876e2c07be2ae",
        "name": "Js basics",
        "number_of_lessons": 100,
        "lesson_completed": 5,
        "hours_needed": 80,
        "hours_spended": 1,
        "createdBy": "644f82c45b397e768876926e",
        "createdAt": "2023-05-05T10:31:30.527Z",
        "__v": 0
    },
    {
        "_id": "6454db262f9876e2c07be2b0",
        "name": "Basic photography",
        "number_of_lessons": 25,
        "lesson_completed": 5,
        "hours_needed": 15,
        "hours_spended": 1,
        "createdBy": "644f82c45b397e768876926e",
        "createdAt": "2023-05-05T10:32:06.924Z",
        "__v": 0
    },
    {
        "_id": "6454db422f9876e2c07be2b2",
        "name": "Physics principles",
        "number_of_lessons": 38,
        "lesson_completed": 2,
        "hours_needed": 38,
        "hours_spended": 2,
        "createdBy": "644f82c45b397e768876926e",
        "createdAt": "2023-05-05T10:32:34.306Z",
        "__v": 0
    },
    {
        "_id": "6454db81e58645d4bca914b0",
        "name": "Introduction of quantam physics",
        "number_of_lessons": 95,
        "lesson_completed": 10,
        "hours_needed": 50,
        "hours_spended": 3,
        "createdBy": "644f82c45b397e768876926e",
        "createdAt": "2023-05-05T10:33:37.019Z",
        "__v": 0
    },
    {
        "_id": "6454dba6e58645d4bca914b3",
        "name": "Introduction of animal life",
        "number_of_lessons": 25,
        "lesson_completed": 0,
        "hours_needed": 12,
        "hours_spended": 0,
        "createdBy": "644f82c45b397e768876926e",
        "createdAt": "2023-05-05T10:34:14.267Z",
        "__v": 0
    }
];