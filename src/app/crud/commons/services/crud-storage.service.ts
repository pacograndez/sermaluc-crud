import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudStorageService {

  constructor() { }

  setData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getData(key: string) {
    return localStorage.getItem(key);
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  removeAll() {
    localStorage.clear();
  }
}
