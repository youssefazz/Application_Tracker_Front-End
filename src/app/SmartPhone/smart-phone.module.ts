import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SmartPhoneComponent } from './smart-phone.component';
import { SmartPhoneDetailsComponent } from './smart-phone-details.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    SmartPhoneDetailsComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    RouterModule.forChild([
      {path:'phones',component:SmartPhoneComponent},
      {path:'phones/:id',component:SmartPhoneDetailsComponent}
    ])
  ]
})
export class SmartPhoneModule { }
