// src/services/api.js
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
const BASE_URL = isLocal ? 
    process.env.VUE_APP_API_LOCAL_URL :
    process.env.VUE_APP_API_BASE_URL

export const api = {
  sendEmail: `${BASE_URL}/sendEmail`,
  sendOrder: `${BASE_URL}/sendOrderEmail`,
};