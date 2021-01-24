import { Component, OnInit } from '@angular/core';
import { Medication } from '../medication';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicationService } from '../medication.service';

@Component({
  selector: 'app-update-medication',
  templateUrl: './update-medication.component.html',
  styleUrls: ['./update-medication.component.css']
})
export class UpdateMedicationComponent implements OnInit {

  id: number;
  medication: Medication;
  public submitted: boolean = false;


  constructor(private route: ActivatedRoute,private router: Router,
    private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.medication = new Medication();

    this.id = this.route.snapshot.params['id'];
    
    this.medicationService.getMedication(this.id)
      .subscribe(data => {
        console.log(data)
        this.medication = data;
      }, error => console.log(error));
  }

  updateMedication() {
    this.medicationService.updateMedication(this.id, this.medication)
      .subscribe(data => {
        console.log(data);
        this.medication = new Medication();
        this.gotoList();
      }, error => console.log(error));
  }


  onSubmit() {
    this.updateMedication();    
  }

  gotoList() {
    this.router.navigate(['/medications']);
  }

}
