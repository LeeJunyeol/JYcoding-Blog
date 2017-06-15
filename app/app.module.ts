import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent} from './about/about.component';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: WelcomeComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  declarations: [ 
    AppComponent,
    NavComponent,
    WelcomeComponent,
    AboutComponent
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
