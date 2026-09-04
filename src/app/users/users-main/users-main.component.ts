import { Component, inject} from '@angular/core';
import { UsersService } from '../users-service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-main',
  imports: [JsonPipe],
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.css']
})
export class UsersMainComponent {

  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);

  constructor() { }

  queryParams = toSignal(
    this.activatedRoute.queryParamMap
  );

  usersResource = rxResource({
    params: () => {
      return {
        limit: this.queryParams()?.get('limit')!,
        offset: this.queryParams()?.get('offset')!
      }
    },
    stream: ({params}) => {
      let {limit, offset} = params;
      const limitInt = limit ? parseInt(limit): 10
      const limitOffset = offset ? parseInt(offset) : 0
      return this.usersService.getUsers(limitInt, limitOffset)
    }
  })

}
