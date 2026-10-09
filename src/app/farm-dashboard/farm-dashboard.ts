import { Component, inject ,OnInit} from '@angular/core';
import { FarmService } from '../Services/farm-service';
import { Init } from 'v8';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-farm-dashboard',
  imports: [CommonModule],
  templateUrl: './farm-dashboard.html',
  styleUrl: './farm-dashboard.css',
})
export class FarmDashboard implements OnInit {
  Farms:any[]=[]
  farmId:any=null
  del:any=null;
  FarmApi=inject(FarmService)
ngOnInit(): void {
 this.FarmApi.getFarms().subscribe((data:any)=>{
  this.Farms=data;
 })
 this.FarmApi.getFarmId(1).subscribe((data:any)=>{
  this.farmId=data
 })
 this.FarmApi.getDelete(1).subscribe((data:any)=>{
  this.del=data;
 })
}
}
