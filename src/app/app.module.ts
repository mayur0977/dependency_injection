import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interceptor } from './core/services/http/Httpinterceptor';
import { LoaderService } from './core/services/loader/Loader.service';
import { ToastrModule } from 'ngx-toastr';
import { REST_API_URL } from './core/tokens';
import { CustomLogService } from './core/services/log/CustomLog.service';
import { LogService } from './core/services/log/Log.service';


export function customLogServiceFactory() {
  const service = new CustomLogService();
  service.setPrefix('(factory demo custom)');
  return service;
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut: 3000,
    }),
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    { provide: REST_API_URL, useValue: 'IT WORKS', multi: false },
    // { provide: REST_API_URL, useValue: 'IT WORKS too', multi: false },
    { provide: LogService, useFactory: customLogServiceFactory }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
