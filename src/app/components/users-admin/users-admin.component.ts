import { Component, Input, Output, EventEmitter, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/Users'

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {
  users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(results => {
      console.log(results);
      this.users = results;
    });
  }

}
