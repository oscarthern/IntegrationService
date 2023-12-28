import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MatTableDataSource } from '@angular/material/table';
import { TimeEdit } from '../TimeEdit';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.scss']
})
export class KursComponent implements OnInit {
 TimeEditData: TimeEdit;
 constructor(private BackendService: BackendService){this.TimeEditData = {} as TimeEdit;}

  dataSource = new MatTableDataSource(); 
  displayedColumns: string[] = ['title', 'start_at', 'end_at', 'location_name', 'location_adress']; 

 ngOnInit(){
  this.getCalenderEventList();
    }
  
  SparatillCanvas(dataSource : any){
    this.BackendService.postCanvasKalender(this.dataSource).subscribe((response: any) =>{
      this.getCalenderEventList();
    })
  }
  getCalenderEventList(){
  this.BackendService.getKursList().subscribe((response: any) => {
    this.dataSource.data = response; 

    });
  }
}