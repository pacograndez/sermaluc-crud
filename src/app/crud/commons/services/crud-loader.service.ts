import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudLoaderService {

  public isLoading$: BehaviorSubject<boolean>;

  constructor() { 
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  public loader(status?: boolean) {
    status ? this.isLoading$.next(true) : this.isLoading$.next(false);
  }
}
