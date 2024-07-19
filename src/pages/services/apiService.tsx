// apiService.ts

import axios, { AxiosResponse } from 'axios';
import { getToken } from './tokenservice';

// const baseURL = 'http://localhost:4000/api'; // Replace this with your API base URL
const baseURL = 'https://moneymonkey-backend-d668543be371.herokuapp.com/api';
// const baseURL = process.env.BASEURL;

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json', // Set Content-Type header
   
    // 'Access-Control-Allow-Origin':'http://localhost:3000'
  },
  credentials: 'include' 
});

// Function to set authorization token (optional)
// export const setAuthToken = (token: string | null) => {
//   if (token) {
//     apiService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete apiService.defaults.headers.common['Authorization'];
//   }
// };

// Add a request interceptor
apiService.interceptors.request.use(
  (config) => {
    // Get the token from local storage
    const token = getToken();

    // If token exists, attach it to the request headers
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    // If any error occurs with the request, return a rejected Promise
    return Promise.reject(error);
  }
);


// Function for GET requests
export const get = async (url: string) => {

    return await apiService.get(url);
   
};

// Function for POST requests
export const apipost = async (url: string, data: any) => {
  
    return await apiService.post(url, data);
   
 
};

export default apiService;
