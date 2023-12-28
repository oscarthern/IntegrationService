import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-time-edit',
  templateUrl: './time-edit.component.html',
  styleUrls: ['./time-edit.component.scss']
})
export class TimeEditComponent {

  searchTerm: string = ''; 
constructor(private router: Router, private BackendService: BackendService){}

  Search(): void{
    
  }

}
