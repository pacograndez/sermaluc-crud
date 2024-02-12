import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';
import { CrudLoaderService } from '../services';
import { environment } from 'src/environments/environment';

@Injectable()
export class CrudLoaderInterceptor implements HttpInterceptor {
  private activeHttpRequest: number;

  constructor(private crudLoaderService: CrudLoaderService) {
    this.activeHttpRequest = 0;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.activeHttpRequest === 0) {
      this.crudLoaderService.loader(true);
    }

    this.activeHttpRequest++;

    return next.handle(request).pipe(
      delay(environment.delay),
      finalize(() => this.hideLoader())
    );
  }

  private hideLoader() {
    this.activeHttpRequest--;

    if (this.activeHttpRequest === 0) {
      this.crudLoaderService.loader();
    }
  }
}
