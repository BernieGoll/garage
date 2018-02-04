import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dbService: DatabaseService) { }

  @ViewChild('f') myForm: NgForm;
  users: any[] = [];

  ngOnInit() {
    this.getUsers();
  }

  onSubmit() {

    const user = {
      full_name: this.myForm.value.name
    };

    this.dbService.registerUser(user).subscribe((user) => {
      this.getUsers();
    });
  }

  getUsers() {
    this.dbService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

}
