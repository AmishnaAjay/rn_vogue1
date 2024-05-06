import axios from 'axios';
import { BASE_URL } from '../config';

const baseURL = "http://localhost:3007/api/v1"; // Your API base URL

const instance = axios.create({
  baseURL,
  timeout: 10000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // You can add any default headers you need
  },
});

// Request interceptors
instance.interceptors.request.use(
  (config) => {
    // You can modify request config here
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response interceptors
instance.interceptors.response.use(
  (response) => {
    // You can modify response data here
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

// HTTP GET method
export const get = (url, config = {}) => {
  return instance.get(url, config);
};

// HTTP POST method
export const post = (url, data = {}, config = {}) => {
  return instance.post(url, data, config);
};

// HTTP PUT method
export const put = (url, data = {}, config = {}) => {
  return instance.put(url, data, config);
};

// HTTP DELETE method
export const remove = (url, config = {}) => {
  return instance.delete(url, config);
};

// HTTP PATCH method
export const patch = (url, data = {}, config = {}) => {
  return instance.patch(url, data, config);
};

export default instance;
