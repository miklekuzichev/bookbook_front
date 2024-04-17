class Api {
    constructor (config) {
      this._url = config.BASE_URL;
      this._headers = config.headers;
    }
  
    _handleOriginalResponse(res) {
      if (!res.ok) {
        return Promise.reject(res.status);
      }
      return Promise.resolve(res.json())
        .then((data) => {
          return { data, status: res.status }
        })
    };
  
    getMoviesData() {
      return fetch(`${this._url}/api/v1/slots/`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._handleOriginalResponse);
    };

    addSlot(data) {
      console.log('data ', JSON.stringify(data));
      return fetch(`${this._url}/api/v1/slots/`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
      }).then(this._handleOriginalResponse);
    };
  
  };

  const TUNING = {
    BASE_URL: 'http://127.0.0.1:8000',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const api = new Api(TUNING);
  
  export default api;
  