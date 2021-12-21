import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/_services/http/http.service';
import { LoaderService } from 'src/app/_services/loader/loader.service';

@Injectable()
export class TraficInterceptor implements HttpInterceptor {

  constructor(private router: Router, private httpService: HttpService, private loader: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.requestStarted()//start loader service
    
    
    
    return next.handle(request).pipe(catchError(err => {

      if (err.status === 401) {
        // auto logout if 401 response returned from api
        //this.authenticationService.logout();
        //document.location.href =''
        
      }

      this.loader.resetSpinner()//reset loader service

      const error = err.error || err.statusText;
      return throwError(()=>error);
    }), finalize(() => this.loader.requestEnded())/*stop loader service*/)
  }
}
