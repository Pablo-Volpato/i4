import axios from 'axios';

//https://api.rawg.io/api/games?key=d286ce7ccf48422fb408b5481d5deb31&dates=2019-09-01,2019-09-30&platforms=18,1,7
const api = axios.create({
    baseURL:'https://api.rawg.io/'
})

export default api;