import { Component, OnInit } from '@angular/core';

class Car{
  model:string;
  age:number;
  fuel:string;
  engineStatus:string = "";

  constructor(model:string,age:number,fuel:string){
    this.model = model;
    this.age = age;
    this.fuel = fuel;
  }

  startEngine():void {
    this.engineStatus = `${this.model} è in moto`
  }

  stopEngine(): void {
    this.engineStatus = `${this.model} è spenta`
  }
}

@Component({
  selector: 'main-home',
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent implements OnInit {

  cars: Car[] = [
    new Car("Ford", 2003, "diesel"),
    new Car("Toyota", 2010, "gasoline"),
    new Car("Audi", 2012, "diesel"),
    new Car("Renault", 2010, "electric")
  ];


  constructor(){}

  ngOnInit(): void {
    
  }
}
