import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { };

  getUrlAndHeaders(product: string) {
    const data = { domain: "", headers: new HttpHeaders() };
    const obj = JSON.parse(environment.products)[product];
    if (obj) {
      data.domain = obj.domain;
      data.headers = new HttpHeaders(obj.headers);
    }
    return data;
  }

  createParams(params: Object) {
    let httpParams = new HttpParams();
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        if (typeof (v) == 'string') {
          httpParams = httpParams.set(k, v);
        } else {
          httpParams = httpParams.set(k, JSON.stringify(v));
        }
      }
    }
    return httpParams;
  }

  get(url: string, params?: any, data?: any, product: string = "a") {
    const { domain, headers } = this.getUrlAndHeaders(product);
    url = domain + url;
    params = this.createParams(params);
    return this.http.get(url, { params: params, headers: headers });
  }

  patch(url:string,data?:any,params?:any,product:string="a"){
    const {domain,headers}=this.getUrlAndHeaders(product);
    url=domain+url;
    params=this.createParams(params);
    return this.http.patch(url,data,{params:params,headers:headers})
  }

  post(url: string, data?: any, params?: any, product: string = "a") {
    const { domain, headers } = this.getUrlAndHeaders(product);
    url = domain + url;
    params = this.createParams(params);
    return this.http.post(url, data, { params: params, headers: headers });
  }

  put(url: string, data?: any, params?: any, product: string = "a") {
    const { domain, headers } = this.getUrlAndHeaders(product);
    url = domain + url;
    params = this.createParams(params);
    return this.http.put(url, data, { params: params, headers: headers });
  }

  delete(url: string, params?: any, product: string = "a") {
    const { domain, headers } = this.getUrlAndHeaders(product);
    url = domain + url;
    params = this.createParams(params);
    return this.http.delete(url, { params: params, headers: headers });
  }
}