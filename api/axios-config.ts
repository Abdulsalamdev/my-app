import axios from "axios"
import {cookieStorage} from "@ibnlanre/portal"

// create an instance
export const LOGINAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})
 
export const token = JSON.parse(
  cookieStorage.getItem("my-user") as string
)?.token;

export const CARD = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        Authorization: `Bearer ${token}`
    }
})



// This is an intersector
// ADDRESS.interceptors.request.use(
//     (req) => {
//         let token = sessionStorage.getItem("my-user");
//         if (token) {
//             JSON.parse(token) 
//             req.headers.Authorization = `Bearer ${token}`;
//         }
//         return req;
//     },
// )

LOGINAPI.interceptors.request.use(
    (req) => {
        let token = sessionStorage.getItem("my-user");
        // console.log(token1);
        if (token) {
            JSON.parse(token)
            req.headers.Authorization = `Bearer ${token}`;
        }
        return req;
    },
    // (error) => { 
    //     toast.error("something went wrong")
    //     promises.reject(error);
    // }
) 