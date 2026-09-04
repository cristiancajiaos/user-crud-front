import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../users-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-users-main',
  imports: [JsonPipe],
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.css']
})
export class UsersMainComponent {

  private usersService = inject(UsersService);

  constructor() { }

  usersResource = rxResource({
    params: () => {
      return {
        limit: 10,
        offset: 0
      }
    },
    stream: ({params}) => {
      const {limit, offset} = params;
      return this.usersService.getUsers(limit, offset)
    }
  })

}
