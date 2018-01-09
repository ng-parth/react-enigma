class HttpService {
    get(url, queryParams = {}) {
      return fetch(url + this.objToQueryString(queryParams), {
        headers: this.httpHeaders(),
        method: 'GET'
      })
      .then((response) => {
        if (response.ok) return response.json();
        throw Error(response.statusText);
      }).catch((err) => {
        throw Error(err.message);
      });
    }
  
    post(url, params) {
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
      })
      .then((response) => {
        if (response.ok) return response.json();
        throw Error(response.statusText);
      })
      .catch((err) => {
        throw Error(err.message);
      });
    }
  
    objToQueryString(queryParams) {
      if (Object.keys(queryParams).length < 1) {
        return '';
      }
      let queryString = Object.keys(queryParams)
                              .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(this.parseObjectToString(queryParams[k])))
                              .join('&');
      return `?${queryString}`;
    }
  
    parseStringToObject(str) {
      try {
        return JSON.parse(str);
      } 
      catch(e) {
        return str;
      }
    }
  
    parseObjectToString(obj) {
      if (typeof(obj) === 'object') {
        return JSON.stringify(obj);
      }
      return obj;
    }
  }
  
  let httpService = new HttpService();
  export default httpService;
  