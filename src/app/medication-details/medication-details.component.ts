import { Medication } from '../medication';
import { Component, OnInit, Input } from '@angular/core';
import { MedicationService } from '../medication.service';
import { MedicationListComponent } from '../medication-list/medication-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medication-details',
  templateUrl: './medication-details.component.html',
  styleUrls: ['./medication-details.component.css']
})
export class MedicationDetailsComponent implements OnInit {


  id: number;
  medication: Medication;

  constructor(private route: ActivatedRoute,private router: Router,
    private medicationService: MedicationService) { }

  ngOnInit(){
    this.medication = new Medication();

    this.id = this.route.snapshot.params['id'];
    
    this.medicationService.getMedication(this.id)
      .subscribe(data => {
        console.log(data)
        this.medication = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['medication']);
  }

}
