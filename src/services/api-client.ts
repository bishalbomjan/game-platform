import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'117835f3f1f247ee98aa7ca39f36bd75'
    }
})