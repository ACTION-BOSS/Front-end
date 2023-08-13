import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://actionboss.store:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
