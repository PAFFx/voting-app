import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)],
}

export const baseUrl: string = 'http://localhost:5223'
