import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightsModule } from './flights/flights.module';
import { LangService } from './shared/lang/services/lang.service';
import { CustomTranslateLoader } from './shared/lang/custom-translate-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlightsModule,
    AuthenticationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactory,
        deps: [LangService]
      }
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function TranslateLoaderFactory(langservice:LangService):CustomTranslateLoader{
  return new CustomTranslateLoader(langservice)

}
