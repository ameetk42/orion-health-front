import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMedicationComponent } from './create-medication/create-medication.component';
import { MedicationDetailsComponent } from './medication-details/medication-details.component';
import { MedicationListComponent } from './medication-list/medication-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateMedicationComponent } from './update-medication/update-medication.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateMedicationComponent,
    MedicationDetailsComponent,
    MedicationListComponent,
    UpdateMedicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }