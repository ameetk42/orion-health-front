import { MedicationDetailsComponent } from '../medication-details/medication-details.component';
import { Observable } from "rxjs";
import { MedicationService } from "../medication.service";
import { Medication } from "../medication";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-medication-list",
  templateUrl: "./medication-list.component.html",
  styleUrls: ["./medication-list.component.css"]
})
export class MedicationListComponent implements OnInit {
  medication: Observable<Medication[]>;

  constructor(private medicationService: MedicationService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.medication = this.medicationService.getMedicationList();
  }

  deleteMedication(id: number) {
    this.medicationService.deleteMedication(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  medicationDetails(id: number){
    this.router.navigate(['details', id]);
  }
}