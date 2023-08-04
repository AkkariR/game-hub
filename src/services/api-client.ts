import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '25c314cdebf045e28786ecc5258646aa'
    }
})