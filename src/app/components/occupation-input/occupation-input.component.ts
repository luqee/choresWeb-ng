import { Component, OnInit } from '@angular/core';
import { Occupation } from 'src/app/Occupation';
import { OccupationService } from 'src/app/services/occupation.service';

@Component({
  selector: 'app-occupation-input',
  templateUrl: './occupation-input.component.html',
  styleUrls: ['./occupation-input.component.css']
})
export class OccupationInputComponent implements OnInit{
  occupations: Occupation[] = []

  constructor(private occupationService: OccupationService){}

  ngOnInit(): void {
    this.occupationService.getOccupations().subscribe((occs)=>this.occupations = occs)
  }
}
