import { createBuilder } from "@ibnlanre/portal";
import {  CARD, LOGINAPI,  } from "./axios-config";
import { ADDRESSAPI, CREATEACCOUNT, CREATEADDRESS, CREATECARD, DELETEADDRESS, DELETECARD, LOGINREFRESH, OTPCODE, RESETPASSWORD, UPDATEADDRESS, UPDATECARD, lOGINAPI } from "@/components/types/types";
import { AxiosRequestConfig } from "axios";

export const builder = createBuilder({
    account:{
        api: {
            sign_in: (data: lOGINAPI) => LOGINAPI.post("/api/account/login/", data),
            logOut: () => LOGINAPI.post("/api/account/logout/"),
            forgetPassword: (email: any) => LOGINAPI.post("/api/account/forgot_password/", email),
            createAccount: (data: CREATEACCOUNT) => LOGINAPI.post("/api/account/create_account/", data),
            resetPassword: (request: any) => LOGINAPI.patch("/api/account/reset_password/", request),
            otpCode: (data: OTPCODE) => LOGINAPI.post("/api/account/verify_verification_code/", data),
            loginRefresh: (data: LOGINREFRESH) => LOGINAPI.post("/api/account/login/refresh", data)
        }
    },
    addressData: {
        api: {
            address: () => CARD.get(`/api/card/company_address/`),
            createAddress: (data: CREATEADDRESS) => CARD.post(`/api/card/company_address/create/`, data),
            updateAddress: (uuid: UPDATEADDRESS) => CARD.put(`/api/card/company_address/${uuid}/`),
            deleteAddress:(uuid: string) => CARD.delete(`/api/card/company_address/${uuid}/`),
        }
    },
    cardData: {
        api: {
            cards: () => CARD.get(`/api/card/expert_cards/active/`),
            createCard: (data: CREATECARD) => CARD.post(`/api/card/expert_cards/create/`, data),
            updateCard: (data: UPDATECARD) => CARD.put(`/api/card/expert_cards/{expert_id}/`, data),
            deleteCard: (data: any) => CARD.delete(`/api/card/expert_cards/{expert_id}/`, data)
        }
    }

    
})