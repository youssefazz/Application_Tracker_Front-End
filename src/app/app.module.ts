import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartPhoneComponent } from './SmartPhone/smart-phone.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Home/home.component';
import { RouterModule } from '@angular/router';
import { SmartPhoneModule } from './SmartPhone/smart-phone.module';
import { PositionComponent } from './Position/position.component';
import { PositionModule } from './Position/position.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    SmartPhoneComponent,
    HomeComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ]),
    SmartPhoneModule,
    PositionModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
