import axios from "axios"

export default axios.create(
    {
        baseURL: 'https://learn-english-backend-bay.vercel.app'
    }
)