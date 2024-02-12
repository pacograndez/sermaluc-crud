import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CrudHeadersInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const rapidapiKey = environment.rapidapiKey;
    const rapidapiHost = environment.rapidapiHost;

    const updateRequest = request.clone({
      headers: request.headers
        .append('X-Rapidapi-Key', rapidapiKey)
        .append('X-Rapidapi-Host', rapidapiHost)
    });
    return next.handle(updateRequest);
  }
}
