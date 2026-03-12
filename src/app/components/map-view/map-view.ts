import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
selector:'app-map-view',
standalone:true,
templateUrl:'./map-view.html',
styleUrl:'./map-view.css'
})
export class MapView implements AfterViewInit{

map:any

ngAfterViewInit(){

this.map=L.map('map').setView([37.77,-122.41],10)

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{ attribution:'OpenStreetMap'}
).addTo(this.map)

setTimeout(() => {
this.map.invalidateSize();
}, 200);

}

}