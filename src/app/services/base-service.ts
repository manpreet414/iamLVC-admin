import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import {Observable} from "rxjs";
import { environment } from '../../environments/environment';

export class BaseService {
  http: Http;
  url = new Map;

  constructor(http, suffix) {
    this.http = http;
    this.url.set('socket', environment.config.SOCKET_URL);
    this.url.set('base', environment.config.BASE_URL);
    this.url.set('api', environment.config.API_URL);
    this.url.set('suffix', suffix);
  }

  authToken() {
    const headers = new Headers({ 'Authorization': localStorage.getItem('token') });
    return new RequestOptions({ headers: headers });
  }

  getHeader(language) {
    const headers = new Headers(
      { 
        'language': language,
        'Authorization': localStorage.getItem('token')
      });
    return new RequestOptions({ headers: headers });
  }

  getUrl(suffix) {
    return this.url.get('api') + (suffix ? suffix : this.url.get('suffix'));
  }

  getItems(language, suffix = null) {
    return this.http.get(this.getUrl(suffix), this.getHeader(language))
                    .toPromise().then(response => response.json());
  }

  getXItems(obj, language, suffix = null) {

      let params = new URLSearchParams();
      for(let key in obj){
          params.set(key, obj[key]) 
      }
    return this.http.get(this.getUrl(suffix)+'?'+params.toString(), this.getHeader(language))
                    .toPromise().then(response => response.json());
  }

  getItem(id, language, suffix = null) {
    return this.http.get(this.getUrl(suffix) + '/' + id, this.getHeader(language))
                    .toPromise().then(response => response.json());
  }

  addItem(obj, language, suffix = null) {
    return this.http.post(this.getUrl(suffix), obj, this.getHeader(language))
                    .toPromise().then(response => response.json())
                    .catch(data => this.handleError(data));
  }

  updateItem(id, obj, language, suffix = null) {
    return this.http.put(this.getUrl(suffix) + '/' + id, obj, this.getHeader(language) )
                    .toPromise().then(response => response.json())
                    .catch(data => this.handleError(data));
  }

  removeItem(obj, language, suffix = null) {
    let url = this.getUrl(suffix)+'/'+obj._id+'/'+obj.is_deleted ;
    return this.http.get(url, this.getHeader(language) )
                    .toPromise().then(response => response.json())
                    .catch(data => this.handleError(data));
  }

  deleteItem(obj, language, suffix = null) {
    return this.http.delete(this.getUrl(suffix), obj )
                    .toPromise().then(response => response.json())
                    .catch(data => this.handleError(data));
  }

  toggleStatus(obj, language, suffix = null) {
    let url = this.getUrl(suffix)+'/'+obj._id ;
    return this.http.put(url, obj, this.getHeader(language) )
                    .toPromise().then(response => response.json())
                    .catch(data => this.handleError(data));
  }

  getCountries(language) {
    return this.getItems(language, 'countries');
  }

  getRoles (code){
    return this.http.get(this.getUrl("role") + '/' + code)
                    .toPromise().then(response => response.json());
  }

  handleError(error) {
    if(error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
      // this.notifier.notify('error', error.json().msg);
    } else {
      // this.notifier.notify('error', 'Unable process your request.');
    }
    return null;
  }
}
