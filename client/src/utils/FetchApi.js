import axios from "axios";


const FetchApi= axios.create({
    baseURL:"http://localhost:5000/api/v1"
})



export default FetchApi;