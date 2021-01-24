import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../medication.service';
import { Medication } from '../medication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medication',
  templateUrl: './create-medication.component.html',
  styleUrls: ['./create-medication.component.css']
})
export class CreateMedicationComponent implements OnInit {

  medication: Medication = new Medication();
  submitted = false;

  constructor(private medicationService: MedicationService,
    private router: Router) { }

  ngOnInit(): void {
  }


  newMedication(): void {
    this.submitted = false;
    this.medication = new Medication();
  }

  save() {
    this.medicationService
    .createMedication(this.medication).subscribe(data => {
      console.log(data)
      this.medication = new Medication();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/medication']);
  }

}
