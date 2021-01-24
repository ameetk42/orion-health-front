import { MedicationDetailsComponent } from './medication-details/medication-details.component';
import { CreateMedicationComponent } from './create-medication/create-medication.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicationListComponent } from './medication-list/medication-list.component';
import { UpdateMedicationComponent } from './update-medication/update-medication.component';

const routes: Routes = [
  { path: '', redirectTo: 'medication', pathMatch: 'full' },
  { path: 'medication', component: MedicationListComponent },
  { path: 'add', component: CreateMedicationComponent },
  { path: 'update/:id', component: UpdateMedicationComponent },
  { path: 'details/:id', component: MedicationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }