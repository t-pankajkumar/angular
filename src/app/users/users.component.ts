import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<any>;
  user = {
    id: '',
    name: '',
    email: '',
    phone: ''
  };
  isEdit: boolean = false;
  constructor(public dataservice: DataService) {
    this.dataservice.getUsers().subscribe(user => {
      this.users = user;
      console.log(this.users)
    });
  }

  ngOnInit() {
  }

  formSubmit(isEdit) {
    if (isEdit) {
      this.dataservice.updateUser(this.user).subscribe(user => {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id == this.user.id)
            this.users.splice(i, 1);
        }
        this.users.unshift(user);
      });
    }
    else {
      this.dataservice.addUser(this.user).subscribe(user => {
        this.users.unshift(user);
      });
    }
  }

  deleteUser(id) {
    this.dataservice.deleteUser(id).subscribe(res => {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == id)
          this.users.splice(i, 1);
      }
    });
  }

  editUser(user) {
    this.user = user;
    this.isEdit = true;
  }

}
