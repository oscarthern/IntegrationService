import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.scss']
})
export class KursComponent {
 constructor(private BackendService: BackendService){}

  dataSource = new MatTableDataSource(); 
  displayedColumns: string[] = ['title', 'start_at', 'end_at', 'location_name', 'location_adress']; 

 ngOnInit(){
    this.BackendService.getKursList().subscribe((response: any) => {
      this.dataSource.data = response; 
    })
  }
 
}
