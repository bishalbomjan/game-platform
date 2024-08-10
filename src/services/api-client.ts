import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'c65ba16f7a3d409c9d38cdbe4f5ec82c'
    }
})