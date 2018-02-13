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
  userRegisterAlert: boolean;
  userRegisterErrorAlert: boolean;

  ngOnInit() {
    this.getUsers();
  }

  onSubmit() {

    const user = {
      full_name: this.myForm.value.full_name,
      username: this.myForm.value.username,
      password: this.myForm.value.password,
      email: this.myForm.value.email

    };

    this.dbService.registerUser(user).subscribe(
      (user) => {
        this.userRegisterAlert = true;

        setTimeout(() => {
          this.userRegisterAlert = false;
        }, 5000);

        this.getUsers();
        this.myForm.reset();
      },
      (err) => {

        this.userRegisterErrorAlert = true;
        setTimeout(() => {
          this.userRegisterErrorAlert = false;
        }, 5000);

      });
    }

  getUsers() {
    this.dbService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

}
