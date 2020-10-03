export class Api {
    constructor(config) {
      this.url = config.url;
      this.headers = config.headers;
  }
    getCards(){
      return fetch(`${this.url}/cards`, {
        method: 'GET',
        headers: this.headers
      })
      .then ((res) => {
        if(res.ok) {
          return res.json()
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
    }
  
   getUserInfo() {
      return fetch(`${this.url}/users/me`, {
        method: 'GET',
        /* Можно лучше:

        Передать здесь и в следующем методе headers из конфига как
        headers: this.headers
        */
        headers: {
          authorization: '598e7645-6daf-4fc9-bf36-583fc26fb0e8',
          'Content-Type': 'application/json'
        } 
      })
      .then ((res) => {
        if(res.ok) {
          return res.json()
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      }) 
    }
    
    changeProfile(elementName,elementAbout) {
       return fetch(`${this.url}/users/me`, {
          method: 'PATCH',
          headers: {
            authorization: '598e7645-6daf-4fc9-bf36-583fc26fb0e8',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: elementName.value,
            about: elementAbout.value
          })
        })
      
        .then ((res) => {
          if(res.ok) {
            return res.json()
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        
    }
    }
    