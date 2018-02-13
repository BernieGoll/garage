import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DatabaseService} from '../../services/database.service';

const now = new Date();

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor(private dbService: DatabaseService) { }

  @ViewChild('cf') carForm: NgForm;
  cars: any[] = [];
  carPicture: string;
  carAddcarAlert: boolean;
  carAddcarErrorAlert: boolean;

  
  ngOnInit() {
    /**
     * This is how you store and then retrieve localStorage items
     *     localStorage.setItem('car', JSON.stringify({picture: 'https://www.mazdausa.com/siteassets/vehicles/2017/mazda6/vlp/trims/sport/17-m6g-sp-25d-snowflake-white-0004.png'}));
            this.car = JSON.parse(localStorage.getItem('car'));
            console.log(this.car);
     */   
      this.carPicture = this.carForm.form.value.carPicture;
      this.getCars();
  }

  onSubmit()
  {
    const car = {
      userID: this.carForm.value.userID,
      make: this.carForm.value.make,
      model: this.carForm.value.model,
      year: this.carForm.value.year,
      milesPerDay: this.carForm.value.milesPerDay,
      dateAdded: this.carForm.value.dateAdded,
      mileage: this.carForm.value.mileage
    }; 
    
    /** 
    this.dbService.addcarCar(car).subscribe(
      (car) => {
        this.addcarAlert = true;

        setTimeout(() => {
          this.AddcarAlert = false;
        }, 5000);

        this.getCars();
        this.myForm.reset();
      },
      (err) => {

        this.carAddcarErrorAlert = true;
        setTimeout(() => {
          this.carAddcarErrorAlert = false;
        }, 5000);
      */
  }

  getCars() 
  {
    this.dbService.getCarsServiceMethod().subscribe(function (anArrayOfCarsFromDatabase) 
    {
      this.cars = anArrayOfCarsFromDatabase;
    });

  }

}
