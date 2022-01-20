import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as L from 'leaflet';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl-leaflet';
import { environment } from 'src/environments/environment';
import { PositionService } from './position.service';
import { IPosition } from './positions';
@Component({
  selector: 'tr-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit , AfterViewInit{

  pageTitle:String='Position';
  map:mapboxgl.Map | undefined;
  lat: number = 51.678418;
  lng: number = 7.809007;
  date1!: Date;
  date2!: Date;
  positionDates: IPosition[]=[];
  positions!: IPosition;
  constructor(private service:PositionService) { }

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      accessToken:environment.mapboxKey,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-8.0212,31.6534],
      zoom: 16
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    const marker = new mapboxgl.Marker({
      draggable: true
      }).setLngLat([-8.0212,31.6534]).addTo(this.map);
  }

  onSubmit(form:NgForm):void{
    console.log(`in submit : ${this.date1} ${this.date2}`);
    this.service.positionBetweenDeuxDate(this.date1,this.date2).subscribe({
      next:positionDate=>{
        this.positionDates=positionDate;
        console.log(positionDate);
      }
      });
      this.positionDates.forEach(positions => {
        this.positions=positions
        console.log(`submit : ${this.positions.latitude} ${this.positions.longitude}`);
      });
      this.map = new mapboxgl.Map({
        accessToken:environment.mapboxKey,
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.positions.latitude,this.positions.longitude],
        zoom: 16
      });
      this.map.addControl(new mapboxgl.NavigationControl());
      const marker = new mapboxgl.Marker({
        draggable: true
        }).setLngLat([this.positions.latitude,this.positions.longitude]).addTo(this.map);
  }
  ngAfterViewInit() {
    
  
  }
  
}
