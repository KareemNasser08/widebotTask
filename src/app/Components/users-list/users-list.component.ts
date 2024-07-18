import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../../Services/users-list.service';
import { Users } from '../../Model/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  usersList: Users[] = [];
  constructor(private _UsersListService: UsersListService, private _Router: Router) { }

  getUsers() {
    this._UsersListService.getAllUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.usersList = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed Request !');
      }
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  // userDetails(id: number) {
  //   this._UsersListService.getUserById(id).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this._Router.navigate([`user-details/${id}`]);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       console.log('Completed Request !');
  //     }
  //   })
  // }
}
