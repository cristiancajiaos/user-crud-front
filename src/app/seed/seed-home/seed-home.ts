import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { UsersService } from '../../users/users-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seed-home',
  imports: [],
  templateUrl: './seed-home.html',
  styleUrl: './seed-home.css',
})
export class SeedHome implements OnInit, OnDestroy {


  message = signal('Executing seed');
  private seedSubscription!: Subscription;

  private usersService = inject(UsersService);

  ngOnInit(): void {
    this.seedSubscription = this.usersService.executeSeed().subscribe((seedResponse) => {
      this.message.set(seedResponse.message)
    })
  }

  ngOnDestroy(): void {
    if (this.seedSubscription) {
      this.seedSubscription.unsubscribe();
    }
  }
}
