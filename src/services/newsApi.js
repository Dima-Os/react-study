import axios from 'axios';

axios.defaults.baseURL = 'https://newsapi.org/v2/';
axios.defaults.headers.common['Authorization'] =
  '8c8da1090b40409b936f0884c35ac72c';

const fetchNews = query => {
  return axios.get(`/everything?q=${query}&pageSize=6`);
};
const newsAPI = { fetchNews };
export default newsAPI;
