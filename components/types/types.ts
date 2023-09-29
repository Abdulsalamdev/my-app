export interface lOGINAPI {
  email: string;
  password: string;
}

export interface ADDRESSAPI {
  id: string;
  address_title: string;
  company_address: string;
  city: string;
  country: ["Nigeria", "Kenya", "uganda"];
  latitude: string;
  longitude: string;
}

export interface RESETPASSWORD {
  email: string;
  new_password: string;
  confirm_new_password: string;
}

export interface OTPCODE {
  first: number;
  second: number;
  third: number;
  fourth: number;
}

export interface CREATEACCOUNT {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface CREATEADDRESS {
  address_title: string;
  company_address: string;
  city: string;
  country: ["Nigeria", "Kenya", "uganda"];
  latitude: string;
  longitude: string;
}

export interface UPDATEADDRESS {
  address_title: string;
  company_address: string;
  city: string;
  country: ["Nigeria", "Kenya", "uganda"];
  latitude: string;
  longitude: string;
  company_address_slug: string;
}

export interface DELETEADDRESS {
  company_address_slug: string;
}

export interface CREATECARD {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  tribe: string;
  card_type: ["Landscape1", "Landscape2", "Portrait1", "Portrait2"];
  phone_number: string;
}

export interface UPDATECARD {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  tribe: string;
  card_type: ["Landscape1", "Landscape2", "Portrait1", "Portrait2"];
  phone_number: string;
  expert_id: string;
}

export interface DELETECARD {
  expert_id: string;
}

export interface LOGINREFRESH {
  refresh : string
}