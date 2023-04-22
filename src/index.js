class API{
  url;
  method='GET';
  #secure;
  
  constructor(url){
    this.url=url;
    this.#secure=url.startsWith('https');
}
  isSecure(){
    return this.#secure;
  }
  updateURL(){
    this.url=url;
    this.#secure=url.startsWith('https');
  }
}
module.exports = { API }
