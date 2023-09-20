import { createBuilder } from "@ibnlanre/portal";
import { LOGINAPI } from "./axios-config";
import { lOGINAPI } from "@/components/types/types";

export const builder = createBuilder({
    account:{
        api: {
            sign_in: (data: lOGINAPI) => LOGINAPI.post("/api/account/login/", data),
        }
    }
    
})