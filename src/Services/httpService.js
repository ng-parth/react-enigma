import axios from 'axios';
class HttpService {
    get = (url, params = {}) => axios.get(url, {params});
}
  
let httpService = new HttpService();
export default httpService;
  