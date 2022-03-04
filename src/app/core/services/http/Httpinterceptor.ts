import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Messages, MessageTitles } from '../../interceptor.model';
import { LoaderService } from '../loader/Loader.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(
    private loaderService: LoaderService,
    private toastr: ToastrService
  ) {}
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.loaderService.showLoader(true);
    request = request.clone({
      setHeaders: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        'Authorization':' Token Value'
      },
    });
    return this.handleRequest(request, next);
  }

  public handleRequest(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 200) {
          if (
            event.body.result &&
            isNaN(event.body.result) &&
            typeof event.body.result === 'string'
          ) {
            // this._toastr.success(event.body.result, null)
          }
        }
      }),
      /** handles the various Error Response. */
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse instanceof HttpErrorResponse) {
          // ERROR HANDLING HEREs
          if (errorResponse.status === 400) {
            const errors = errorResponse.error.hasOwnProperty('errors')
              ? errorResponse.error['errors']
              : errorResponse.error;
            this.toastr.error(errors[0].message, MessageTitles.Error);
          } else if (errorResponse.status === 401) {
            this.toastr.error(
              Messages.MessageForUnauthorizedToken,
              MessageTitles.Error
            );
          } else if (errorResponse.status === 403) {
            this.toastr.error(
              Messages.MessageForUnauthorized,
              MessageTitles.Error
            );
          } else if (errorResponse.status === 404) {
            this.toastr.error(
              Messages.MessageForEndPointNotFound,
              MessageTitles.Error
            );
          } else if (errorResponse.status === 408) {
            this.toastr.error(
              Messages.MessageForRequestTimeout,
              MessageTitles.Error
            );
          } else if (errorResponse.status === 500) {
            this.toastr.error(
              Messages.MessageForInternalServerError,
              MessageTitles.Error
            );
          }
        }
        return throwError(errorResponse);
      }),
      finalize(() => {
        this.loaderService.showLoader(false);
      })
    );
  }
}
