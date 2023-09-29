import { createBuilder } from "@ibnlanre/portal";
import {  CARD, LOGINAPI,  } from "./axios-config";
import { ADDRESSAPI, CREATEACCOUNT, CREATEADDRESS, CREATECARD, DELETEADDRESS, DELETECARD, LOGINREFRESH, OTPCODE, RESETPASSWORD, UPDATEADDRESS, UPDATECARD, lOGINAPI } from "@/components/types/types";

export const builder = createBuilder({
    account:{
        api: {
            sign_in: (data: lOGINAPI) => LOGINAPI.post("/api/account/login/", data),
            logOut: () => LOGINAPI.post("/api/account/logout/"),
            forgetPassword: () => LOGINAPI.post("/api/account/forget_password/"),
            createAccount: (data: CREATEACCOUNT) => LOGINAPI.post("/api/account/create_account/", data),
            resetPassword: (data: RESETPASSWORD) => LOGINAPI.post("/api/account/reset_password/", data),
            otpCode: (data: OTPCODE) => LOGINAPI.post("/api/account/verify_verification_code/", data),
            loginRefresh: (data: LOGINREFRESH) => LOGINAPI.post("/api/account/login/refresh", data)
        }
    },
    addressData: {
        api: {
            address: () => CARD.get(`/api/card/company_address/`),
            createAddress: (data: CREATEADDRESS) => CARD.post(`/api/card/company_address/create/`, data),
            updateAddress: (data: UPDATEADDRESS) => CARD.put(`/api/card/company_address/{company_address_slug}/`, data),
            deleteAddress:(data: any) => CARD.delete(`/api/card/company_address/{company_address_slug}/`, data),
        }
    },
    cardData: {
        api: {
            cards: () => CARD.get(`/api/card/expert_cards/`),
            createCard: (data: CREATECARD) => CARD.post(`/api/card/expert_cards/create/`, data),
            updateCard: (data: UPDATECARD) => CARD.put(`/api/card/expert_cards/{expert_id}/`, data),
            deleteCard: (data: any) => CARD.delete(`/api/card/expert_cards/{expert_id}/`, data)
        }
    }

    
})