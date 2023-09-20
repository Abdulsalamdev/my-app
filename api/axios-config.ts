import axios from "axios"
import { promises } from "dns";
import {cookieStorage} from "@ibnlanre/portal"
import { toast } from "react-toastify";
// create an instance
export const LOGINAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})
 

export const CARD = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})
export const ADDRESS = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

// This is an intersector

LOGINAPI.interceptors.request.use(
    (req) => {
        let token = sessionStorage.getItem("my-user");
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