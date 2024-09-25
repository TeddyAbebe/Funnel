import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.example.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Set Authorization header 
export const setAuthToken = (token: string) => {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Fetch account by affiliate_id or domain
export const getAccount = (type: string, value: string) => {
  return apiClient.get(`/accounts/${type}/${value}`);
};

// Fetch leads by affiliate_id or domain
export const getLeads = (type: string, value: string) => {
  return apiClient.get(`/leads/${type}/${value}`);
};

// Create a new lead
export const createLead = (email: string, affiliateId: string) => {
  return apiClient.post("/leads", {
    lead: {
      email,
      affiliate_id: affiliateId,
    },
  });
};

// Send confirmation email
export const sendConfirmationEmail = (token: string) => {
  return apiClient.post("/leads/send_confirmation_email", {
    token,
  });
};

// Confirm lead
export const confirmLead = (token: string) => {
  return apiClient.post("/leads/confirm", {
    token,
  });
};

// User login
export const loginUser = (email: string, password: string) => {
  return apiClient.post("/users/sign_in", {
    email,
    password,
  });
};
