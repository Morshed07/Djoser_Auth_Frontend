import axios from "axios";



// Create an axios instance
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api', // Set your base URL here
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true, // Allow sending cookies with requests
  });